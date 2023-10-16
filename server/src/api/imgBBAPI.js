const fetch = require('node-fetch');
const { BASE_URL_IMGBB, API_KEY } = require('../constants/imgBBApi');
const { METHOD } = require('../constants/dummyAPI');

const createFetchWithBody = (url, method, formData) => {
    return fetch(url, {
        method: method,
        body: formData,
    })
    .then(resp => {
        console.log(resp)
        return resp.json()})
}

module.exports = {
    uploadImgApi: (formData) => {
        return createFetchWithBody(BASE_URL_IMGBB, METHOD.POST, formData)
    },
}