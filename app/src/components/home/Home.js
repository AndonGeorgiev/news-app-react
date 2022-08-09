import styles from './Home.module.css'
import NewsCatalog from './../NewsCatalog/NewsCatalog'
import NewsItem from './../NewsItem/NewsItem'



function Home() {
    return (
        <>
        <NewsItem title="Top News For Test" img="https://www.usinenouvelle.com/mediatheque/2/2/9/001216922_624x337_c.jpg" top="true" />
        <NewsCatalog/>
        <NewsCatalog/>
        <NewsCatalog/>
        </>
    )
}

export default Home;