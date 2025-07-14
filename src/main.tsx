import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import ReactGA from "react-ga4";

ReactGA.initialize("G-GYSKWL9VDK");
ReactGA.send("pageview");


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename="/blipmq-site">
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
