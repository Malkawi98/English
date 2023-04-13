import React from 'react';
import Home from "./pages/Home";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CommonWords from "./pages/CommonWords";

function App() {
    return (

        <div className="container">
            <Router>
                <Routes>
                    <Route path="/English" element={<Home/>}/>
                    <Route path="/common-words" element={<CommonWords/>}/>
                </Routes>
            </Router>
        </div>);
}

export default App;