import { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
export function PromptPage() {
    const [temperature, setTemperature] = useState(0.7)
    const [maxGenerations, setMaxGenerations] = useState(250)
    const [responsePrompt, setResponsePrompt] = useState('')
    const [prompt, setPrompt] = useState('')


    const handlePrompt = async (prompt: string, temperature: number, maxGenerations: number) => {
        try {
            const response = await fetch('http://localhost:3000/generatePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: prompt, // Provide your desired prompt here
                    temperature: temperature, // Provide your desired temperature here
                    maxGenerationTokens: maxGenerations, // Provide your desired max generations here
                }),
            });

            const data = await response.json();
            console.log('Result:', data.result);
            setResponsePrompt(data.result)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <Box>
            <TextField
                id="outlined-basic"
                label="Prompt"
                variant="outlined"
                color="secondary"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <TextField
                id="outlined-basic"
                label="Temperature"
                variant="outlined"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
            />
            <TextField
                id="outlined-basic"
                label="Max Generations tokens"
                variant="outlined"
                value={maxGenerations}
                onChange={(e) => setMaxGenerations(parseInt(e.target.value))}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={() => handlePrompt(prompt, temperature, maxGenerations)}
            >
                Generate a text
            </Button>
            <Box>
                <h2>Response generated by ai</h2>
                <p>{responsePrompt}</p>
            </Box>
        </Box>
    );
}