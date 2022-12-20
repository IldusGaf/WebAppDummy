const request = require('supertest');
const app = require('../../src/app');
const api = require('../../src/api/dummyApi');

jest.mock('../../src/api/dummyApi');

describe('getCommentList', () => {
    test('getCommentList should return comment list', async () => {
        const postId = 123;
        api.getCommentListApi.mockResolvedValue({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-11-25T21:56:06.020Z',
                    owner: {
                        name: 'Allen'
                    }
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-05-24T14:53:17.598Z',
                    owner: {
                        name: 'Ararat'
                    }
                }
            ]
        });
        const result = await request(app)
            .get(`/post/${postId}/comment`)
            .send();
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.text)).toEqual({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-11-25T21:56:06.020Z',
                    owner: {
                        name: 'Allen'
                    }
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-05-24T14:53:17.598Z',
                    owner: {
                        name: 'Ararat'
                    }
                }
            ]
        });
    });

    test('getCommentList should return error', async () => {
        const postId = 123;
        const errorText = 'Some error';
        api.getCommentListApi.mockRejectedValue(errorText);
        const result = await request(app)
            .get(`/post/${postId}/comment`)
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(errorText);
    });
});

describe('getPostList', () => {
    test('getPostList should return post list', async () => {
        api.getPostListApi.mockResolvedValue({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-11-25T21:56:06.020Z',
                    owner: {
                        name: 'Allen'
                    }
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-05-24T14:53:17.598Z',
                    owner: {
                        name: 'Ararat'
                    }
                }
            ]
        });
        const result = await request(app)
            .get('/post')
            .send();
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.text)).toEqual({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-11-25T21:56:06.020Z',
                    owner: {
                        name: 'Allen'
                    }
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-05-24T14:53:17.598Z',
                    owner: {
                        name: 'Ararat'
                    }
                }
            ]
        });
    });

    test('getPostList should return error', async () => {
        const errorText = 'Some error';
        api.getPostListApi.mockRejectedValue(errorText);
        const result = await request(app)
            .get('/post')
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(errorText);
    });
});

describe('getPost', () => {
    test('getPost should return post list by id', async () => {
        const postId = 123;
        api.getPostApi.mockResolvedValue({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amret',
                    publishDate: '2020-11-25T21:56:06.020Z',
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amret',
                    publishDate: '2020-05-24T14:53:17.598Z',
                }
            ]
        });
        const result = await request(app)
            .get(`/post/${postId}`)
            .send();
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.text)).toEqual({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amret',
                    publishDate: '2020-11-25T21:56:06.020Z',
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amret',
                    publishDate: '2020-05-24T14:53:17.598Z',
                }
            ]
        });
    });

    test('getPost should return error', async () => {
        const postId = "";
        const errorText = 'Some error';
        api.getPostApi.mockRejectedValue(errorText);
        const result = await request(app)
            .get(`/post/${postId}`)
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(errorText);
    });
});

describe('getPostByUser', () => {
    test('getPostByUser should return post list by user id', async () => {
        const postId = 123;
        api.getPostByUserApi.mockResolvedValue({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-11-25T21:56:06.020Z',
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-05-24T14:53:17.598Z',
                }
            ]
        });
        const result = await request(app)
            .get(`/user/${postId}/post`)
            .send();
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.text)).toEqual({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-11-25T21:56:06.020Z',
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-05-24T14:53:17.598Z',
                }
            ]
        });
    });

    test('getPostByUser should return error', async () => {
        const postId = 123;
        const errorText = 'Some error';
        api.getPostByUserApi.mockRejectedValue(errorText);
        const result = await request(app)
            .get(`/user/${postId}/post`)
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(errorText);
    });
});
