import React from 'react';
import './Audio.css';
interface propTypes  {
    src: string,
}
function Audio({src}: propTypes) {
    return (
        <audio controls src={src}>
                    Your browser does not support the audio tag.
        </audio>
    );
}

export default Audio;