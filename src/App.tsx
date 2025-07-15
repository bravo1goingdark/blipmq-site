import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import usePageTracking from "./utils/usePageTracking.ts";

const Highlights = lazy(() => import("./components/HighLights.tsx"));
const EssentialFeatures = lazy(() => import("./components/Features.tsx"));
const Footer = lazy(() => import('./components/Footer.tsx'))
const App = () => {
    usePageTracking();

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-900">
            <NavBar />
            <main className="px-4 sm:px-6">
                <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Highlights />} />
                        <Route path="/features" element={<EssentialFeatures />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default App;
