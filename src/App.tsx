import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
	BrowserRouter,
  Routes,
	Route,

} from "react-router-dom";
import { LandingPage } from './Components/LandingPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
