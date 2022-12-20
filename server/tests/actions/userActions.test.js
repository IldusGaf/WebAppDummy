
const actions = require('../../src/actions/userActions');
const api = require('../../src/api/dummyApi');

describe('createUser', ()=>{
    jest.spyOn(api, 'createUserApi')

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('createUser should return resolved',(done)=>{
        api.createUserApi.mockResolvedValue({
            id: 123,
            firstName: 'Dasafs',
            lastName: 'Bradley',
            dateOfBirth: '1984-11-25T21:43:06.020Z',
            registerDate: '1984-11-25T21:43:06.020Z',
            updatedDate: '1984-11-25T21:43:06.020Z'
        })
        actions.createUserThirdParty( {
            firstName: 'Dasafs',
            lastName: 'Bradley',
            dateOfBirth: '1984-11-25T21:43:06.020Z',
        })
        .then( resp =>{
            expect(resp).toEqual({
                id: 123,
                firstName: 'Dasafs',
                lastName: 'Bradley',
                dateOfBirth: '1984-11-25T21:43:06.020Z',
                registerDate: '1984-11-25T21:43:06.020Z',
                updatedDate: '1984-11-25T21:43:06.020Z'
            })
        })
        done()
    })

    test('createUser should return error', (done)=>{
        const errorText = 'Api error';
        api.createUserApi.mockRejectedValue(errorText)
        actions.createUserThirdParty(
            {
                firstName: 'Dasafs',
                lastName: 'Bradley',
                dateOfBirth: 'Z',
            })
            .catch(err=>{
                expect(err).toEqual(errorText)
            })
        done()
    })
})

describe('updateUser', ()=>{
    jest.spyOn(api, 'updateUserApi')
    
    afterEach(() => {
        jest.clearAllMocks()
    });
    
    test('updateUser should return resolved',(done)=>{
        api.updateUserApi.mockResolvedValue({
            id: 123,
            firstName: 'Dasafs',
            lastName: 'Bradle',
            dateOfBirth: '1984-11-25T21:43:06.020Z',
            registerDate: '1984-11-25T21:43:06.020Z',
            updatedDate: '1984-11-25T21:43:06.020Z'
        })
        actions.updateUserThirdParty( {
            firstName: 'Dasafs',
            lastName: 'Bradle',
            dateOfBirth: '1984-11-25T21:43:06.020Z',
        })
        .then( resp =>{
            expect(resp).toEqual({
                id: 123,
                firstName: 'Dasafs',
                lastName: 'Bradle',
                dateOfBirth: '1984-11-25T21:43:06.020Z',
                registerDate: '1984-11-25T21:43:06.020Z',
                updatedDate: '1984-11-25T21:43:06.020Z'
            })
        })
        done()
    })

    test('updateUser should return error', (done)=>{
        const errorText = 'Api error';
        api.updateUserApi.mockRejectedValue(errorText)
        actions.updateUserThirdParty(
            {
                firstName: 'Dasafs',
                lastName: 'Bradley',
                dateOfBirth: 'Z',
            })
            .catch(err=>{
                expect(err).toEqual(errorText)
            })
        done()
    })
})