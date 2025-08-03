import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.tsx'

// Initialize theme based on localStorage or system preference
const initializeTheme = () => {
  // Check localStorage first
  const storedTheme = localStorage.getItem('theme')
  
  if (storedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else if (storedTheme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    // Fallback to system preference if no stored theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

initializeTheme()


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter >
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
