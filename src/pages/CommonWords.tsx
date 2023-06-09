import React, {useEffect, useRef, useState} from 'react';
import Audio from "../components/Audio";
import TextInput from "../components/TextInput";
import './CommonWords.css';
import ReactDiffViewer from 'react-diff-viewer-continued';
import {words} from './words';
import textObject from '../utils/TextUtil';
import {paragraphs} from "./Paragraphs";
import {voices} from '../utils/voiceOptions';
import fetchAudioFile from "../utils/fetchAudioFile";
import {TextArea} from "../components/TextArea";
import {useLocation} from "react-router-dom";

interface propTypes {
    textType: string
}

function CommonWords({textType = 'words'}: propTypes) {
    enum DiffMethod {
        CHARS = 'diffChars', WORDS = 'diffWords',
    }

    let practiceType = textType === 'words' ? words : paragraphs;

    const location = useLocation();
    const [enteredWord, setEnteredWord] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [currentWord, setCurrentWord] = useState('');
    const [showNext, setShowNext] = useState(false);
    const [tts, setTts] = useState('');
    const [voice, setVoice] = useState('en_us_001');
    const [voiceName, setVoiceName] = useState('Please select a voice');

    const audioRef = useRef(null);
    useEffect(() => {
        setCurrentWord(practiceType[Math.floor(Math.random() * practiceType.length)]);
    }, [voiceName, location.pathname])

    useEffect(() => {
        fetchAudioFile(currentWord, voice, setTts)?.catch()
    }, [currentWord])


    function checkAnswer(e: any) {
        console.log('current word', currentWord, 'entered word', enteredWord)
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

    async function loadNextQuestion() {
        await setCurrentWord(practiceType[Math.floor(Math.random() * practiceType.length)]);
        setIsCorrect(false);
        setShowNext(false);
    }

    const customStyles: any = {marker: {display: "none"}, contentText: {textAlign: "center",}};
    type v = {
        [key: string]: boolean
    }
    return (<div className='words-test'>
        <h1 className='center'>{textObject[textType].header}</h1>
        <div className='check-words'>
            <select className={'select'} onChange={(e) => {
                const value = e.target.value;
                const innerText = e.target.options[e.target.selectedIndex].innerText;
                setVoiceName(innerText);
                setVoice(value);
            }}>
                <option disabled hidden value="none">{voiceName}</option>
                {voices.map((voice) => {
                    return (<React.Fragment key={voice.name}>
                        <option key={voice.name} disabled className="bold">{voice.name}</option>
                        {Object.keys(voice.voices).map((key) => {
                            return (<option key={voice.voices[key]} value={voice.voices[key]}>{key}</option>);
                        })}
                    </React.Fragment>);
                })}

            </select>
            <Audio audioRef={audioRef} src={tts}></Audio>
            {textType === 'words' && <TextInput textType={textType} onEnterPress={checkAnswer}/>}
            {textType === 'paragraphs' && <TextArea textType={textType} onEnterPress={checkAnswer}/>}
            {isCorrect && currentWord && <div className='diff-viewer'>
                <ReactDiffViewer
                    styles={customStyles}
                    compareMethod={textType === 'words' ? DiffMethod.CHARS : DiffMethod.WORDS}
                    newValue={currentWord}
                    oldValue={enteredWord}
                    splitView={false}
                    hideLineNumbers={true}/>
            </div>}
            <div className='next-steps'>
                {showNext && <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24"
                                  viewBox="0 0 24 24">
                    <path
                        d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                </svg>}
                {showNext && <button className="next" onClick={loadNextQuestion}><span>Next Word</span>
                </button>}
            </div>
        </div>
    </div>);
}

export default CommonWords;