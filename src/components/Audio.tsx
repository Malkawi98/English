import React, {useEffect, useRef} from 'react';
import './Audio.css';
import {useState} from "react";

interface propTypes {
    src: string,
    audioRef: any
}


function Audio({src}: propTypes) {
    const [audioSpeed, setAudioSpeed] = useState(1);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.play().catch();
            return () => {
                audioElement.pause();
            };
        }
    }, [src]);
    const changeAudioSpeed = (speed: number) => {
        const audio = document.getElementsByTagName('audio')[0];
        setAudioSpeed(speed)
        audio.playbackRate = speed;
    }
    return (<div className='player-container'>
        <audio ref={audioRef} controls src={src}>
            Your browser does not support the audio tag.
        </audio>
        <select onChange={(event) => changeAudioSpeed(parseFloat(event.target.value))} className='play-speed'>
            <option value="1.0">1.0x</option>
            <option value="0.75">0.75x</option>
            <option value="0.5">0.5x</option>
        </select>
    </div>);
}

export default Audio;