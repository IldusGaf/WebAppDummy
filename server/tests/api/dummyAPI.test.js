const fetch = require('node-fetch');
const api = require('../../src/api/dummyAPI');

const BASE_URL = 'https://dummyapi.io/data/v1/';
const USER_LIST_URL = `${BASE_URL}user`;
const POST_LIST_URL = `${BASE_URL}post`;
const PAGE_FIELD= 'page';
const LIMIT_FIELD = 'limit';
const page = 2;
const limit = 10;
const id = '60d0fe4f5311236168a109da';
const postId = '60d0fe4f5311236168a109da';

const METHOD = {
    get: 'GET',
    post: 'POST',
    put: 'PUT'
}

const APP_ID_FIELD = 'app-id';
const APP_ID = '617b11efbdaa719034cf6d83';

const RESPONSE_LIST = 'api response';
const RESPONSE_USER = {
    "id": "60d0fe4f5311236168a109da",
    "title": "mr",
    "firstName": "Lance",
    "lastName": "Foster",
    "picture": "https://randomuser.me/api/portraits/med/men/13.jpg",
    "gender": "male",
    "email": "lance.foster@example.com",
    "dateOfBirth": "1971-08-29T22:05:26.775Z",
    "phone": "0101 451 3221",
    "location": {
      "street": "2334, Church Street",
      "city": "Chichester",
      "state": "Cornwall",
      "country": "United Kingdom",
      "timezone": "-3:00"
    },
    "registerDate": "2021-06-21T21:02:10.075Z",
    "updatedDate": "2021-06-21T21:02:10.075Z"
  };


// jest.mock('node-fetch', ()=> jest.fn(()=>Promise.resolve({
//     json: ()=>({
//         data: RESPONSE_LIST
//     })
// })));


// const fetches = jest.requireMock('node-fetch')

// describe('fetch is mock func', () => {
//     test('fetch is mock func success', () => {
//         expect(jest.isMockFunction(fetches)).toBeTruthy()
//     })
// });

// describe('getUserListAPI', ()=>{

//     test('getUserListAPI should return object', () => {
//         expect(api.getUserListApi()).toEqual(expect.any(Object));
//     });

//     test('getUserListAPI should call fetch with params', ()=>{
//         api.getUserListApi(page, limit)
//         expect(fetch).toBeCalledWith(`${USER_LIST_URL}?${PAGE_FIELD}=${page}&${LIMIT_FIELD}=${limit}`,
//         { 
//             method: METHOD.get,
//             headers: {[APP_ID_FIELD]: APP_ID}
//         })
//     })
//     test('getUserListAPI should return promise with response.data', () => {
//         const result = api.getUserListApi(page, limit);
//         expect(result).toEqual(expect.any(Promise))
//         expect(result).resolves.toEqual({data: RESPONSE_LIST})
//     })
// })

// describe('getPostListAPI', ()=>{

//     test('getPostListAPI should return object', () => {
//         expect(api.getPostListApi()).toEqual(expect.any(Object));
//     });

//     test('getPostListAPI should call fetch with params', ()=>{
//         api.getPostListApi(page, limit)
//         expect(fetch).toBeCalledWith(`${POST_LIST_URL}?${PAGE_FIELD}=${page}&${LIMIT_FIELD}=${limit}`,
//         { 
//             method: METHOD.get,
//             headers: {[APP_ID_FIELD]: APP_ID}
//         })
//     })
//     test('getPostListAPI should return promise with response.data', () => {
//         jest.clearAllMocks();
//         const result = api.getPostListApi(page, limit);
//         expect(result).toEqual(expect.any(Promise))
//         expect(result).resolves.toEqual({data: RESPONSE_LIST})
//     })
// })

// describe('getCommentListAPI', ()=>{

//     test('getCommentListAPI should return object', () => {
//         expect(api.getCommentListApi()).toEqual(expect.any(Object));
//     });

//     test('getCommentListAPI should call fetch with params', ()=>{
//         api.getCommentListApi(postId, page, limit)
//         expect(fetch).toBeCalledWith(`${POST_LIST_URL}/${postId}/comment?${PAGE_FIELD}=${page}&${LIMIT_FIELD}=${limit}`,
//         { 
//             method: METHOD.get,
//             headers: {[APP_ID_FIELD]: APP_ID}
//         })
//     })
//     test('getCommentListAPI should return promise with response.data', () => {
//         const result = api.getCommentListApi(postId, page, limit);
//         expect(result).toEqual(expect.any(Promise))
//         expect(result).resolves.toEqual({data: RESPONSE_LIST})
//     })
// })

jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
    json: () => ({
        data: {id: '123',
        firstName: 'Allen',
        lastName: 'Bradley'
        }})
})));
    

describe('getUserAPI', ()=>{
    
    test('getUserAPI should return object', () => {
        expect(api.getUserApi()).toEqual(expect.any(Object));
    });

    test('getUserAPI should call fetch with params', ()=>{
        api.getUserApi(id)
        expect(fetch).toBeCalledWith(`${USER_LIST_URL}/${id}`,
        { 
            method: METHOD.get,
            headers: {[APP_ID_FIELD]: APP_ID}
        })
    })
    test('getUserAPI should return promise with response.data', () => {
        const result = api.getUserApi(page, limit);
        expect(result).toEqual(expect.any(Promise))
        expect(result).resolves.toEqual({
            data: {id: '123',
            firstName: 'Allen',
            lastName: 'Bradley'
            }})
    })
})

describe('createUserAPI', () => {
    test('createUserAPI should return object', () => {
        expect(api.createUserApi()).toEqual(expect.any(Object));
    });

    test('createUserAPI should call fetch with new user data ', () => {
        const user = {
            id: '123',
            firstName: 'Allen',
            lastName: 'Bradley'
        }
        const stringifyedUser = JSON.stringify(user);
        api.createUserApi(user);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user/create`,
            {
                method: METHOD.post, 
                headers: {[APP_ID_FIELD]: APP_ID,
                    'Content-Type': 'application/json'},
                body: stringifyedUser
            })
    });

    test('createUserAPI should return promise with new user data', () => {
        const result = api.createUserApi('123');
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual({
            data: {
                id: '123',
                firstName: 'Allen',
                lastName: 'Bradley'
        }});
    });
})

describe('updateUserAPI', () => {
    test('updateUserAPI should return object', () => {
        expect(api.updateUserApi()).toEqual(expect.any(Object));
    });

    test('updateUserAPI should call fetch with updated user data ', () => {
        const user = {
            id: '123',
            firstName: 'Allen',
            lastName: 'Bradley'
        }
        const stringifyedData = JSON.stringify(user);
        api.updateUserApi(id, user);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user/${id}`,
            {
                method: METHOD.put, 
                headers: {[APP_ID_FIELD]: APP_ID,
                'Content-Type': 'application/json'},
                body: stringifyedData
            }
        )
    });

    test('updateUserAPI should return promise with updated user data', () => {
        const user = {
            id: '123',
            firstName: 'Allen',
            lastName: 'Bradley'
        }
        const result = api.updateUserApi(id, user);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual({
            data: {
                id: '123',
                firstName: 'Allen',
                lastName: 'Bradley'
            }
        });
    });
})