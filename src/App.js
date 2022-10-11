import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompData } from './utils/includes';
import Login from "./components/login/login";
import Home from "./components/home/home";
import axios from "axios";
import Layout from "./components/layout/layout";
import "./App.css";
import Trending from "./components/trending/trending";
import ContentDetails from "./components/details/contentDetails";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [animeList, setAnimeList] = useState([]);
  let token = localStorage.getItem('token')

  useEffect(() => {
    if(isAuth){
      axios.get(CompData.GETURL).then((resp) => {
        if (resp.status === 200) {
          setAnimeList(resp.data);
        }
      })
    }
  },[isAuth]);

  useEffect(() => {
    if(token){
      setIsAuth(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isAuth ? (animeList && <Home animeList={animeList} />) : (<Login setIsAuth={setIsAuth} />)}/>
            <Route path="/trending" element={isAuth ? (<Trending />) : (<Login setIsAuth={setIsAuth} />)}/>
            <Route path="/:slug" element={isAuth ? (<ContentDetails />) : (<Login setIsAuth={setIsAuth} />)}/>            
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
