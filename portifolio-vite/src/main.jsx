import {  ColorModeScript } from '@chakra-ui/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import theme from './components/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <AppRoutes />
  </React.StrictMode>,
)
