import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompData } from './utils/includes';
import Login from "./components/login/login";
import Home from "./components/home/home";
import axios from "axios";
import Layout from "./components/layout/layout";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [animeList, setAnimeList] = useState([]);
  useEffect(() => {
    axios.get(CompData.GETURL).then((resp) => {
      if (resp.status === 200) {
        setAnimeList(resp.data);
      }
    });
  }, []);
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={token ? (<Home animeList={animeList} />) : (<Login setToken={setToken} />)}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
