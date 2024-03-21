
import { AppRoutes } from "./AppRoutes"

import { Link } from "react-router-dom";
import { Stack, Typography, Box, } from '@mui/material'
import { AccessibilityNew } from '@mui/icons-material'

function App() {

  return (
    <Box
      sx={{
        padding: 4,
        bgcolor: 'grey',
      }}


    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={30}

        sx={{
          marginBottom: 10,
          bgcolor: 'beige',
          color: 'blue',
          padding: 3,
        }}
      >
        <AccessibilityNew />
        <Link
          to="/">
          <Typography
            sx={{
              fontSize: 24,
              color: '#4CAF50', // Green
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#2196F3', // Blue
              },
            }}

          >MENU</Typography>
        </Link>
        <Link to="/prompt">
          <Typography >Prompt</Typography>
        </Link>
        <Link to="/calculator">
          <Typography >Calculator</Typography>
        </Link>
        <AccessibilityNew />

      </Stack>
      <AppRoutes />
    </Box>
  )
}

export default App