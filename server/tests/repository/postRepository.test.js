const repository = require('../../src/repositories/postRepository');
const api = require('../../src/api/dummyApi');

describe('getPostList', () => {
    jest.spyOn(api, 'getPostListApi');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getPostList should return resolved', (done) => {
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
        repository.getPostListThirdParty()
            .then(result => {
                expect(result).toEqual({
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
                done();
            });
    });

    test('getPostList should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getPostListApi.mockRejectedValue(errorText);
        repository.getPostListThirdParty()
            .catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
});

describe('getPost', () => {
    jest.spyOn(api, 'getPostApi');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getPost should return resolved', (done) => {
        api.getPostApi.mockResolvedValue({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-11-25T21:56:06.020Z',
                    owner: {
                        name: 'Allen'
                    }
                },
            ]
        });
        repository.getPostThirdParty()
            .then(result => {
                expect(result).toEqual({
                    data: [
                        {
                            id: 123,
                            text: 'Lorem ipsum dolor sit amet',
                            publishDate: '2020-11-25T21:56:06.020Z',
                            owner: {
                                name: 'Allen'
                            }
                        },
                    ]
                });
                done();
            });
    });

    test('getPostByUser should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getPostApi.mockRejectedValue(errorText);
        repository.getPostThirdParty()
            .catch(error => {
                expect(error).toEqual(errorText);
            });
        done();
    });
});

describe('getPostByUser', () => {
    jest.spyOn(api, 'getPostByUserApi');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getPostByUser should return resolved', (done) => {
        api.getPostByUserApi.mockResolvedValue({
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
        repository.getPostByUserThirdParty()
            .then(result => {
                expect(result).toEqual({
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
                done();
            });
    });

    test('getPostByUser should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getPostByUserApi.mockRejectedValue(errorText);
        repository.getPostByUserThirdParty()
            .catch(error => {
                expect(error).toEqual(errorText);
            });
        done();
    });
});