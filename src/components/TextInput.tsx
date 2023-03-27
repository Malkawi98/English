import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';
interface propTypes  {
    onEnterPress: any,
}

function TextInput({onEnterPress}: propTypes) {
    return (
        <label htmlFor="text">
            <input className='word-input' onKeyDown={onEnterPress} type="text" id="text" name="text" placeholder="Type your word here"/>
        </label>
    );
}

export default TextInput;