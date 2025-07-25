import {lazy, Suspense, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import usePageTracking from "./utils/usePageTracking.ts";
import ReactGA from 'react-ga4';
import { ThemeProvider } from "./context/ThemeContext";

const Highlights = lazy(() => import("./components/HighLights.tsx"));
const EssentialFeatures = lazy(() => import("./components/Features.tsx"));
import Footer from './components/Footer';

const App = () => {
    usePageTracking();

    useEffect(() => {
        ReactGA.initialize('G-GYSKWL9VDK');
        ReactGA.send('pageview');
    }, []);

    return (
        <ThemeProvider>
            <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <NavBar />
                <main className="px-4 sm:px-6">
                    <Suspense fallback={<div className="text-center py-10 dark:text-gray-200">Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Highlights />} />
                            <Route path="/features" element={<EssentialFeatures />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
