const fetch = require('node-fetch');
const { METHOD, APP_ID_FIELD, APP_ID_VALUE, USER_LIST_URL, POST_LIST_URL, PAGE_FIELD, LIMIT_FIELD } = require('../constants/dummyAPI');

const getFetch = (url) => {
    return fetch(url, {
        method: METHOD.GET,
        headers: {
            [APP_ID_FIELD]: APP_ID_VALUE
        }
    })
    .then(resp => {
        console.log(resp)
        return resp.json()})
}

const createFetchWithBody = (url, method, body) => {
    console.log(body)
    return fetch(url, {
        method: method,
        headers: {
            [APP_ID_FIELD]: APP_ID_VALUE,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(resp => {
        console.log(resp)
        return resp.json()})
}

module.exports = {
    getUserListApi: (page, limit) => {
        const url = `${USER_LIST_URL}?${(page || limit) && `${PAGE_FIELD}=${page}&${LIMIT_FIELD}=${limit ? limit : 20}`}`;
        return getFetch(url)
    },
    getUserApi: (id) => {
        const url = `${USER_LIST_URL}/${id}`;
        return getFetch(url)
    },
    updateUserApi: (id, body) => {
        const url = `${USER_LIST_URL}/${id}`;
        return createFetchWithBody(url, METHOD.PUT, body)
    },
    createUserApi: (body) => {
        const url = `${USER_LIST_URL}/create`;
        return createFetchWithBody(url, METHOD.POST, body)
    },
    getPostListApi: (page, limit) => {
        const url = `${POST_LIST_URL}?${(page || limit) && `${PAGE_FIELD}=${page}&${LIMIT_FIELD}=${limit ? limit : 20}`}`;
        return getFetch(url)
    },
    getPostApi: (id) => {
        const url = `${POST_LIST_URL}/${id}`;
        return getFetch(url)
    },
    getPostByUserApi: (id) => {
        const url = `${USER_LIST_URL}/${id}/post`;
        return getFetch(url)
    },
    getCommentListApi: (id, page, limit) => {
        const url = `${POST_LIST_URL}/${id}/comment?${(page || limit) && `${PAGE_FIELD}=${page}&${LIMIT_FIELD}=${limit ? limit : 20}`}`;
        return getFetch(url)
    },
}