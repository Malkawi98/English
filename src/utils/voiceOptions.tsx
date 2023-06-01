
interface VoiceOptions {
    [key: string]: string;
}
export const voices = [
    {
        name: 'English US',
        voices: {
            'Female': 'en_us_001',
            'Male 1': 'en_us_006',
            'Male 2': 'en_us_007',
            'Male 3': 'en_us_009',
            'Male 4': 'en_us_010'
        } as VoiceOptions
    },
    {name: 'English UK', voices: {'Male 1': 'en_uk_001', 'Male 2': 'en_uk_003'} as VoiceOptions},
    {name: 'English AU', voices: {'Male 1': 'en_au_001', 'Male 2': 'en_au_002'} as VoiceOptions},
];
