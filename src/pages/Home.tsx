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
                <p><span className='header'>Elevate your writing game</span> Boost your IELTS
                    writing skills with our unique approach to learning the most common 5000 IELTS
                    words! Our website offers an immersive experience that combines auditory and
                    written practice to enhance your vocabulary and spelling abilities. By hearing
                    the word and writing it down, you'll develop a stronger understanding of the
                    correct spelling and pronunciation. And if you make a mistake, don't worry! Our
                    website provides instant feedback and correction to help you learn from your
                    errors. With our effective and personalized approach, you'll be well on your way
                    to achieving your IELTS goals. </p>

                <Link className='btn' to={'/common-words'}>
                    Start Practicing
                </Link>
            </div>
            <img src={laptop} alt=""/>
        </section>
        <section className='section'>
            <img src={womenTyping} alt=""/>
            <p><span className='header'>Improve your English writing skills with ease!</span>Our
                website offers a simple and
                effective way to enhance your spelling through regular practice. Whether you're a
                student, professional, or simply looking to sharpen your language skills, our
                platform is the perfect tool to help you reach your writing goals. Start practicing
                today and watch your spelling abilities soar!</p>
        </section>
    </div>;
}

export default Home;