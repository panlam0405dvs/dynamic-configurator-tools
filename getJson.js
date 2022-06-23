export async function getJson(category = 'a', id = 1) {
    return await get('/get-my-json/', {category: category, id: id});
}

const get = (url, params, options) => request(url, params, options, 'GET');

const request = (url, params = {}, options = {}, method = 'GET') => {
    options.method = method;
    if ('GET' === method) {
        url += '?' + (new URLSearchParams(params)).toString();
    } else {
        options.body = JSON.stringify(params);
    }

    return fetch(url, options).then(response => response.json());
};
