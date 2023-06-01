import * as React from 'react';

interface propTypes {
    onEnterPress: any,
    textType: string,
}

export function TextArea({onEnterPress, textType}: propTypes) {
    return (
        <textarea name="" id="" cols={30} rows={10} className={textType === 'words' ? 'word-input' : 'paragraph-input'} onKeyDown={onEnterPress}></textarea>
    );
}