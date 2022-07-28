function NewsItem (props){
    return(
        <li>
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href="#">Read more</a>
        </li>
    )
}

export default NewsItem;