
import { AppRoutes } from "./AppRoutes"

import { Link } from "react-router-dom";
import { Stack, Typography, Box } from '@mui/material'
import { AccessibilityNew } from '@mui/icons-material'

function App() {

  return (
    <Box
      sx={{ padding: 2 }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}

        sx={{
          marginBottom: 2,
        }}
      >
        <AccessibilityNew/>
        <Link to="/">
          <Typography >MENU</Typography>
        </Link>
        <Link to="/prompt">
          <Typography >prompt</Typography>
        </Link>
        <Link to="/calc">
          <Typography >calc</Typography>
        </Link>
        <AccessibilityNew/>

      </Stack>
      <AppRoutes />
    </Box>
  )
}

export default App