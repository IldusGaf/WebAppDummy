const fetch = require('node-fetch');
const api = require('../../src/api/imgBBAPI');

const BASE_URL = 'https://api.imgbb.com/1/upload';

const METHOD = {
    get: 'GET',
    post: 'POST',
    put: 'PUT'
}


jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
    json: () => ({
        id: '123',
        firstName: 'Allen',
        lastName: 'Bradley'
    })
})));

const fetches = jest.requireMock('node-fetch')

describe('fetch is mock func', () => {
    test('fetch is mock func success', () => {
        expect(jest.isMockFunction(fetches)).toBeTruthy()
    })
});

describe('uploadImgApi', ()=>{

    test('uploadImgApi should return object', () => {
        expect(api.uploadImgApi()).toEqual(expect.any(Object));
    });

    test('uploadImgApi should call fetch with data', () => {
        const user = {
            id: '123',
            firstName: 'Allen',
            lastName: 'Bradley'
        }
        api.uploadImgApi(user);
        expect(fetch).toBeCalledWith(
            BASE_URL,
            {method: METHOD.post, body: user}
        )
    });
})