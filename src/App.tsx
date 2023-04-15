import React from 'react';
import Home from "./pages/Home";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CommonWords from "./pages/CommonWords";
import Navbar from "./components/Navbar";

function App() {
    return (<>
                <Router>
                    <Navbar/>
                    <div className="container">
                    <Routes>
                        <Route path="/English" element={<Home/>}/>
                        <Route path="/English/common-words" element={<CommonWords/>}/>
                    </Routes>
                    </div>
                </Router>
        </>);
}

export default App;