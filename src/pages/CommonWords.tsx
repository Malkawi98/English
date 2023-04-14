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

    const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random() * words.length)]);
    const [enteredWord, setEnteredWord] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [tts, setTts] = useState('');
    const [voice, setVoice] = useState('en_us_001');
    const [voiceName, setVoiceName] = useState('Please select a voice');
    const voices = {
        'English US': {'Female': 'en_us_001', 'Male 1': 'en_us_006', 'Male 2': 'en_us_007'},
        'English UK': {'Male 1': 'en_uk_001', 'Male 2': 'en_uk_003'},
        'English AU': {'Male 1': 'en_au_001', 'Male 2': 'en_au_003'},
    }
    useEffect(() => {
        fetch(`https://tiktok-tts.weilnet.workers.dev/api/generation`, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                text: currentWord, voice: voice,
            })
        }).then(res => res.json()).then(res => {
            setTts(`data:audio/mpeg;base64,${res.data}`)
        }).catch(err => {
            console.log(err)
        })

    }, [currentWord, voiceName])

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
        setCurrentWord(words[Math.floor(Math.random() * words.length)]);
        setIsCorrect(false);
        setShowNext(false);
    }

    const v = {'string': {'string': 'string'}};
    return <div className='words-test'>
        <h1>Practice the most common 5000 Ielts words</h1>
        <div className='check-words'>
            <select onChange={(e) => {
                const value = e.target.value;
                const innerText = e.target.options[e.target.selectedIndex].innerText;
                 setVoiceName(innerText); setVoice(value)}}>
                <option defaultValue={true} disabled hidden value="none">{voiceName}</option>
                {Object.keys(voices).map((key, index) => {
                    return <>
                        <option disabled className="bold">{key}</option>
                        {Object.keys(voices[key] as Array<keyof typeof v>).map((key2, index2) => {
                            return <option
                                           value={voices[key][key2]}>{key2}</option>
                        })}
                        <option disabled></option>
                    </>
                })}
            </select>
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
                {showNext &&
                  <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24"
                       viewBox="0 0 24 24">
                    <path
                      d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                  </svg>}
                {showNext &&
                  <button className="next" onClick={loadNextQuestion}><span>Next Word</span>
                  </button>}
            </div>
        </div>
    </div>;
}

const customStyles: any = {
    marker: {
        display: "none"
    }, contentText: {
        textAlign: "center",
    }
};


export default CommonWords;