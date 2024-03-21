import { Stack, Typography } from "@mui/material";
import { Box, Button, TextField } from '@mui/material


export function CalculatorPage() {
    return (
        <Stack
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Typography variant="h3">Calculator</Typography>

        </Stack>
    );
}
const handlemult = async (a: number, b: number) => {
    try {
        const response = await fetch('http://localhost:3000/mul', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                a: a, // Provide your first number here
                b: b, // Provide your second number here
            }),
        });

        const data = await response.json();
        console.log('Result:', data.result);
        setResponseMult(data.result)
    } catch (error) {
        console.error('Error:', error);
    }
}
return (
    <Box>
        <TextField
            id="outlined-basic"
            label="First Number"
            variant="outlined"
            color="secondary"
            value={a}
            onChange={(e) => seta(e.target.value)}
        />
        <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            value={b}
            onChange={(e) => setb(parseFloat(e.target.value))}
        />
        <Button
            variant="contained"
            color="primary"
            onClick={() => handlemult(a, b)}
        >
            Response
        </Button>
        <Box>
            <h2>Response of your calcul :</h2>
            <p>{responsePrompt}</p>
        </Box>
    </Box>
);
}
