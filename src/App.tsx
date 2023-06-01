import React from 'react';
import Home from "./pages/Home";

import CommonWords from "./pages/CommonWords";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
    return (<>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container">
                    <Routes>
                        <Route path="/English" element={<Home/>}/>
                        <Route path="/English/common-words"  element={<CommonWords textType='words'/>}/>
                        <Route path="/English/practice-paragraphs" element={<CommonWords textType='paragraphs'/>}/>
                    </Routes>
                    </div>
                </BrowserRouter>
        </>);
}

export default App;