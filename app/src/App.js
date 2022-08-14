
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsCatalog from './components/NewsCatalog/NewsCatalog';
import NewsDetails from './components/NewsDetails/NewsDetails';

function App() {
    return (
        <div className="root">

            <Header />
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/news/bulgaria' element={<NewsCatalog tag = "Bulgaria"/>} />
                <Route path='/news/world' element={<NewsCatalog tag = "World"/>} />
                <Route path='/news/sport' element={<NewsCatalog tag = "Sport"/>} />
                <Route path='/news/:id' element={<NewsDetails/>} />
            </Routes>

            <Footer />
        </div>
    )

}

export default App;
