import React from 'react';
import NewsItem from './../NewsItem/NewsItem'
const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-06-28&sortBy=publishedAt&apiKey=988cee739618468d87430caa71252075"

function NewsCatalog (){

    let [news, setNews] = React.useState([]);
    const key =0;

    React.useEffect(()=>{  
        fetch(url)
        .then((data) => data.json())
        .then((news) => {
            let data = Object.values(news.articles)
            setNews(data)
        });
      
    },[])
    
    return(
        news.map( news => <NewsItem  title={news.title} description={news.description} img={news.urlToImage}></NewsItem>)
    )
}

export default NewsCatalog;