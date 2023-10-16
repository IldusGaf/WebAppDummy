const repository = require('../../src/repositories/commentRepository');
const api = require('../../src/api/dummyApi');

describe('getCommentsApi', () => {
    jest.spyOn(api, 'getCommentListApi');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getComments should return resolved', (done) => {
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
        repository.getCommentListThirdParty()
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

    test('getCommentsApi should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getCommentListApi.mockRejectedValue(errorText);
        repository.getCommentListThirdParty()
        .catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
});