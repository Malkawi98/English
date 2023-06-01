import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar container">
            <nav>
                <h1>LanguageLifters.com</h1>
                <ul className='header-list'>
                    <li><Link className='hover-underline-animation' to="/English/">Home</Link></li>
                    <li><Link className='hover-underline-animation' to="/English/common-words">Common
                        Words</Link></li>
                    <li><Link className='hover-underline-animation' to="/English/practice-paragraphs">Practice Paragraphs</Link></li>
                </ul>
            </nav>
        </header>

    );
}

export default Navbar;