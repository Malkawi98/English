const fetchAudioFile = (currentWord: string, voice: string, setTts: any) => {
    if (currentWord === '') return;
    return fetch(`https://tiktok-tts.weilnet.workers.dev/api/generation`, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            text: currentWord, voice: voice,
        })
    }).then(res => res.json()).then(res => {
        setTts(`data:audio/mpeg;base64,${res.data}`)
    }).catch(err => {
        console.log(err)
    });
}

export default fetchAudioFile;