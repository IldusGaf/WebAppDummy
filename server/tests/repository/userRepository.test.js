
const repository = require('../../src/repositories/userRepository');
const api = require('../../src/api/dummyApi');

describe('getUserList', ()=>{
    jest.spyOn(api, 'getUserListApi')
    test('getUserList should return resolved', (done) => {
        api.getUserListApi.mockResolvedValue({
            data: [
                {
                    id: 123,
                    firstName: 'Allen',
                    lastName: 'Bradley',
                },
                {
                    id: 456,
                    firstName: 'Harley',
                    lastName: 'Davidson'
                }
            ]
        });
        repository.getUserListThirdParty()
        .then(result=>{
            expect(result).toEqual({
                data: [
                    {
                        id: 123,
                        firstName: 'Allen',
                        lastName: 'Bradley',
                    },
                    {
                        id: 456,
                        firstName: 'Harley',
                        lastName: 'Davidson'
                    }
                ]
            })
            done()
        })

    })

    test('getUserList should return rejected with error', (done) => {
        const errText = 'API error'
        api.getUserListApi.mockRejectedValue(errText)
        repository.getUserListThirdParty()
        .catch(err => {
            expect(err).toEqual(errText)
        })
        done()
    })
})

describe('getUser', ()=>{
    jest.spyOn(api, 'getUserApi')

    afterEach(()=>{
        jest.clearAllMocks()
    })

    test('getUser should return resolved', (done)=> {
        api.getUserApi.mockResolvedValue({
            id: 123,
            firstName: 'Allen',
            lastName: 'Bradley',
            dateOfBirth: '1984-11-25T21:56:06.020Z',
            registerDate: '1984-11-25T21:56:06.020Z',
            updatedDate: '1984-11-25T21:56:06.020Z'
        });
        repository.getUserThirdParty()
        .then(
            result => {
                expect(result).toEqual({
                    id: 123,
                    firstName: 'Allen',
                    lastName: 'Bradley',
                    dateOfBirth: '1984-11-25T21:56:06.020Z',
                    registerDate: '1984-11-25T21:56:06.020Z',
                    updatedDate: '1984-11-25T21:56:06.020Z'
                })
                
            }
        )
        done()
    })

    test('getUser should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getUserApi.mockRejectedValue(errorText);
        repository.getUserThirdParty()
        .catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
})