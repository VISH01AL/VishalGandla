import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import ThemeProvider from './StateManager/ThemeProvider.tsx'
import { HashRouter  } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <HashRouter >
            <ThemeProvider>
            <App />
            </ThemeProvider>
  </HashRouter>
  </React.StrictMode>,
)
