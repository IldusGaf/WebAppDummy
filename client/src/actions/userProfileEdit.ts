import { Dispatch } from 'redux';
import { editUserProfile } from '../api/dummyAPI';
import { uploadFileToImgBB } from '../api/imgBBAPI';
import {
  HIDE_UPLOAD_IMGBB_LOADING,
  HIDE_USER_PROFILE_EDIT_LOADING, LOAD_UPLOAD_IMGBB_ERROR, LOAD_UPLOAD_IMGBB_SUCCESS, LOAD_USER_PROFILE_EDIT_ERROR, LOAD_USER_PROFILE_EDIT_SUCCESS, SHOW_UPLOAD_IMGBB_LOADING, SHOW_USER_PROFILE_EDIT_LOADING,
} from '../constants/actions/userProfile';
import { UserProfileEditAction } from '../types/actions';
import { UserProfileTypeResponse } from '../types/dummyAPIResponses';
import { fileToBase64Url } from '../utils/fileToBase64Url';

const showLoadingAction = () => ({
  type: SHOW_USER_PROFILE_EDIT_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_USER_PROFILE_EDIT_LOADING,
});

const editSuccessAction = (userData: UserProfileTypeResponse): UserProfileEditAction => ({
  type: LOAD_USER_PROFILE_EDIT_SUCCESS,
  userProfileEditData: userData,
});

const editErrorAction = (error: any): UserProfileEditAction => ({
  type: LOAD_USER_PROFILE_EDIT_ERROR,
  error,
});

const showPhotoLoadingAction = () => ({
  type: SHOW_UPLOAD_IMGBB_LOADING,
});

const hidePhotoLoadingAction = () => ({
  type: HIDE_UPLOAD_IMGBB_LOADING,
});

const editPhotoSuccessAction = () => ({
  type: LOAD_UPLOAD_IMGBB_SUCCESS,
});

const editPhotoErrorAction = (error: any): UserProfileEditAction => ({
  type: LOAD_UPLOAD_IMGBB_ERROR,
  error,
});

export const editPhoto = (userPhoto: any, callback:(imgUrl: string) => void) => (dispatch: Dispatch) => {
  console.log('im here fuck');
  dispatch(showPhotoLoadingAction());
  const formData = new FormData();
  formData.append('image', userPhoto);
  fileToBase64Url(formData.get('image'), (res) => { formData.set('image', res); });
  uploadFileToImgBB(formData, callback)
    .then(() => {
      dispatch(editPhotoSuccessAction());
    })
    .catch((e: any) => dispatch(editPhotoErrorAction(e)))
    .finally(() => dispatch(hidePhotoLoadingAction()));
};

export const edit = (idUser:string, userData:any) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  editUserProfile(idUser, userData)
    .then((resp: UserProfileTypeResponse) => {
      dispatch(editSuccessAction(resp || {}));
    })
    .catch((e: any) => dispatch(editErrorAction(e)))
    .finally(() => dispatch(hideLoadingAction()));
};
