import { Stack, Typography } from "@mui/material";

export function HomePage() {
    return (
        <Stack
            flexDirection = "column"
            justifyContent = "center"
            alignItems = "center"
            spacing = {2}
                >
            <Typography variant="h1">Hoime</Typography>
            
        </Stack>
    );
}