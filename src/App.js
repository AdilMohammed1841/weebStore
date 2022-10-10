import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import { useState } from 'react';
import Home from "./components/home/home";

function App() {
  const [token, setToken] = useState('');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token? <Home /> : <Login setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
