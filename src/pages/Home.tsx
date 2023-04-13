import React from 'react';
import './Home.css';
import laptop from '../../public/laptop.gif';
import womenTyping from '../../public/women-typing.gif';
import {Link} from "react-router-dom";
function Home() {
    return <div className='index-container'>
        <h1 className='center'>Master Your Spelling Practice Exercises!</h1>
        <section className='section'>
            <div>
                <p><span className='header'>Elevate your writing game</span> cutting-edge voice-to-text
                    technology! Our website
                    provides an innovative way to enhance your English writing skills by practicing
                    spelling
                    through speaking. With our user-friendly platform, you can easily train your
                    spelling
                    abilities using your voice and receive instant feedback. Whether you're on-the-go or
                    prefer a hands-free approach, our voice-to-text feature is designed to help you
                    master
                    your spelling in the most convenient way possible. Try it out today and take your
                    English writing skills to the next level</p>

                <Link className='btn' to={'/common-words'} >
                    Start Practicing
                </Link>
            </div>
            <img src={laptop} alt=""/>
        </section>
        <section className='section'>
            <img src={womenTyping} alt=""/>
            <p><span className='header'>Improve your English writing skills with ease!</span>Our website offers a simple and
                effective way to enhance your spelling through regular practice. Whether you're a
                student, professional, or simply looking to sharpen your language skills, our
                platform is the perfect tool to help you reach your writing goals. Start practicing
                today and watch your spelling abilities soar!</p>
        </section>
    </div>;
}

export default Home;