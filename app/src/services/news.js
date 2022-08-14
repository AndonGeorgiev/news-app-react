export const getNews = function (url) {

    return fetch(url)
        .then(data => data.json());

}

export const getNewsById = function (id) {
    return fetch('http://localhost:4000/news/' + id )
        .then(data => data.json());
}
