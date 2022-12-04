import { API_KEY, BASE_URL_IMGBB, PROXY_URL_IMGBB } from '../constants/imgBBAPI';

export const uploadFileToImgBB = (formData: FormData, callback?: (imgUrl: string) => void) => {
  console.log('');
  // formData.set('key', API_KEY);
  return fetch(PROXY_URL_IMGBB, {
    method: 'POST',
    body: formData,
  }).then((resp) => resp.json())
    .then((json) => (callback ? callback(json.data.display_url) : json.data.display_url));
};
