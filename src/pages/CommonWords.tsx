import React, {useEffect, useState} from 'react';
import Audio from "../components/Audio";
import TextInput from "../components/TextInput";
import './CommonWords.css';
import ReactDiffViewer from 'react-diff-viewer-continued';
import {words} from './words';
CommonWords.propTypes = {};

function CommonWords() {
    enum DiffMethod {
        CHARS = 'diffChars',
    }

    const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random()*words.length)]);
    const [enteredWord, setEnteredWord] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [tts, setTts] = useState('');
    useEffect(() => {
        console.log(currentWord)
        let req = new XMLHttpRequest()
        req.open('POST', `https://tiktok-tts.weilnet.workers.dev/api/generation`, false)
        req.setRequestHeader('Content-Type', 'application/json')
        req.send(JSON.stringify({
            text: currentWord,
            voice: "en_us_001"
        }))

         let resp = JSON.parse(req.responseText)
        console.log(resp.data)
            setTts(`data:audio/mpeg;base64,${resp.data}`)
    },[currentWord])

    function checkAnswer(e: any) {
        if (e.key === 'Enter') {
            if (e.target.value === currentWord) {
                setIsCorrect(false)
            } else {
                setEnteredWord(e.target.value)
                setIsCorrect(true)
            }
            e.target.value = '';
            e.target.placeholder = ''
            setShowNext(true)

        }
    }

    function loadNextQuestion() {
        setCurrentWord(words[Math.floor(Math.random()*words.length)]);
        setIsCorrect(false);
        setShowNext(false);
    }

    return (
        <div className='words-test'>
            <h1>Practice the most common 5000 Ielts words</h1>
            <div className='check-words'>
                <Audio src={tts}></Audio>
                <TextInput onEnterPress={checkAnswer}></TextInput>
                {isCorrect && <div className='diff-viewer'>
                  <ReactDiffViewer
                    styles={customStyles}
                    compareMethod={DiffMethod.CHARS}
                    oldValue={currentWord}
                    newValue={enteredWord}
                    splitView={false}
                    hideLineNumbers={true}/>
                </div>}
                <div className='next-steps'>
                    {showNext && <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>}
                    {showNext && <button className="next" onClick={loadNextQuestion}><span>Next Word</span></button>}
                </div>
            </div>
    </div>);
}

const customStyles: any = {
    marker: {
        display: "none"
    }, contentText: {
        textAlign: "center",
    }
};



export default CommonWords;