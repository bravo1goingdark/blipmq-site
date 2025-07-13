import NavBar from "./components/NavBar.tsx";
import { Highlights } from "./components/HighLights.tsx";

const App = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-900">
            <NavBar />
            <main className="px-4 sm:px-6">
                <Highlights />
                {/*<Waitlist/>*/}
            </main>
        </div>
    );
};

export default App;
