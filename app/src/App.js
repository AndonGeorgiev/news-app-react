
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsCatalog from './components/NewsCatalog/NewsCatalog';
import NewsDetails from './components/NewsDetails/NewsDetails';
import EditPage from './components/EditPage/EditPage';
import CreatePage from './components/CreatePage/CreatePage';
import {useState ,useEffect} from 'react'
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import AuthContext from './context/AuthContext';
import {userInfo,setUserInfo} from './services/user'



function App() {

    let [user , setUser] = useState({});

    useEffect(() => {
        const info = userInfo()
        setUser(info)
    }, []);

    return (
        <div className="root">
            <AuthContext.Provider value={{user, setUser}}>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/news/bulgaria' element={<NewsCatalog tag="Bulgaria" />} />
                    <Route path='/news/world' element={<NewsCatalog tag="World" />} />
                    <Route path='/news/sport' element={<NewsCatalog tag="Sport" />} />
                    <Route path='/news/:id' element={<NewsDetails />} />
                    <Route path='/news/edit/:id' element={<EditPage />} />
                    <Route path='/news/create' element={<CreatePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Routes>

                <Footer />
            </AuthContext.Provider>
        </div>
    )

}

export default App;
