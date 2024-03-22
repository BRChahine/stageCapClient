import { Stack, Typography } from "@mui/material";
import { Box, Button, TextField } from '@mui/material';
import { useState } from "react";
import ButtonGroup from '@mui/material/ButtonGroup';



export function CalculatorPage() {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [response, setResponse] = useState(0)

    const handleMult = async (numOne: number, numTwo: number) => {
        const path = "http://localhost:3000/mul?a=" + numOne + "&b=" + numTwo
        try {
            const res = await fetch(path)
            const data = await res.json();

            setResponse(data.result)

        } catch (error) {
            console.error('Error:', error);
        }
    }
    const handleSub = async (numOne: number, numTwo: number) => {
        const path = "http://localhost:3000/sub?a=" + numOne + "&b=" + numTwo
        try {
            const res = await fetch(path)
            const data = await res.json();

            setResponse(data.result)

        } catch (error) {
            console.error('Error:', error);
        }
    }
    const handleAdd = async (numOne: number, numTwo: number) => {
        const path = "http://localhost:3000/add?a=" + numOne + "&b=" + numTwo
        try {
            const res = await fetch(path)
            const data = await res.json();

            setResponse(data.result)

        } catch (error) {
            console.error('Error:', error);
        }
    }
    const handleDivi = async (numOne: number, numTwo: number) => {
        const path = "http://localhost:3000/divi?a=" + numOne + "&b=" + numTwo
        try {
            const res = await fetch(path)
            const data = await res.json();

            setResponse(data.result)

        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <Stack
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Typography variant="h3">Calculator</Typography>
            <Box>

                <TextField
                    id="outlined-basic"
                    label="First Number"
                    variant="outlined"
                    color="secondary"
                    value={a}
                    onChange={(e) => setA(Number(e.target.value))}
                />
                <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    value={b}
                    onChange={(e) => setB(Number(e.target.value))}
                />
            </Box>
            <Box>
                <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleAdd(a, b)}
                    >
                        Additionner
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleSub(a, b)}
                    >
                        Soustraire
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleMult(a, b)}
                    >
                        Multiplier
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleDivi(a, b)}
                    >
                        Diviser
                    </Button>
                </ButtonGroup>

            </Box>
            <p>{response}</p>

        </Stack>
    );
}



