import React from 'react';
import './TextInput.css';
import textObject from '../utils/TextUtil';

interface propTypes {
    onEnterPress: any,
    textType: string,
}

function TextInput({onEnterPress, textType}: propTypes) {
    return (<label htmlFor="text">
            <input autoComplete='off' className={textType === 'words' ? 'word-input' : 'paragraph-input'} onKeyDown={onEnterPress} type="text" id="text" name="text"
                   placeholder={textObject[textType].placeholder}/>
        </label>);
}

export default TextInput;