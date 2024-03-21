import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import CssBaseline from '@mui/material/CssBaseline';

const cache = createCache({ key: 'css', prepend: true })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <BrowserRouter>
        <CssBaseline />

        <App />
      </BrowserRouter>
    </CacheProvider>
  </React.StrictMode>,
)
