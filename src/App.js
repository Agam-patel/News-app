// import logo from './logo.svg';
import './App.css';
// react based app 
// function based app hooks 
// common react hooks useState useEffect useContext useRef 

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
//class based component

//yaha per state and props thodi diffrent hoti hai 
const App =()=> {
 const apiKey=process.env.REACT_APP_NEWS_API;
// infinite scroll

const [progress,setprogress]=useState(0);


    return (
      <div>
        <BrowserRouter>
       <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}  />
       <NavBar></NavBar>
        <Routes>
        <Route path="/" element={<News setprogress={setprogress} apiKey={apiKey} key="a" pageSize={16} country="in" category="general"></News>}/>
        <Route path="/business" element={<News setprogress={setprogress} apiKey={apiKey} key="b" pageSize={16} country="in" category="business"></News>}/>
        <Route path="/entertainment" element={<News setprogress={setprogress} apiKey={apiKey} key="c" pageSize={16} country="in" category="entertainment"></News>}/>
        <Route path="/health" element={<News setprogress={setprogress} apiKey={apiKey} key="d" pageSize={16} country="in" category="health"></News>}/>
        <Route path="/science" element={<News setprogress={setprogress} apiKey={apiKey} key="e" pageSize={16} country="in" category="science"></News>}/>
        <Route path="/sports" element={<News setprogress={setprogress} apiKey={apiKey} key="f" pageSize={16} country="in" category="sports"></News>}/>
        <Route path="/technology" element={<News setprogress={setprogress} apiKey={apiKey} key="g" pageSize={16} country="in" category="technology"></News>}/>
        </Routes>
       </BrowserRouter>
      </div>
    );
  
}

export default App;
