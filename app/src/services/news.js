export const getNews = function (url) {

    return fetch(url)
        .then(data => data.json());

}

export const getNewsById = function (id) {
    return fetch('http://localhost:4000/news/' + id )
        .then(data => data.json());
}

export const editNews = function (id, data) {
    return fetch('http://localhost:4000/news/edit/' + id,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    } )
        .then(data => data.json());
}

export const deleteNews = function (id) {
    return fetch('http://localhost:4000/news/delete/' + id,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    } )
        .then(data => data.json());
}

export const createNews = function (data) {
    const userId = localStorage.getItem('userId')
    return fetch('http://localhost:4000/news/create/',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({...data, creator: userId})
    } )
        .then(data => data.json());
}


///news/like/:id


export const likeNews = function (id) {
    const userId = localStorage.getItem('userId')
    return fetch('http://localhost:4000/news/like/' + id,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({"userId": userId})
    } )
        .then(data => data.json());
}