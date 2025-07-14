import NavBar from "./components/NavBar.tsx";
import {Highlights} from "./components/HighLights.tsx";
import {EssentialFeatures} from "./components/Features.tsx";
import {Routes, Route} from "react-router-dom";
import usePageTracking from "./utils/usePageTracking.ts";

const App = () => {
    usePageTracking();
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-900">
            <NavBar/>
            <main className="px-4 sm:px-6">
                <Routes>
                    <Route path="/" element={<Highlights/>}/>
                    <Route path="/features" element={<EssentialFeatures/>}/>
                </Routes>
            </main>
        </div>
    );
};

export default App;
