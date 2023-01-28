import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";

function App() {
    return (
        <div className="app">
        <AppHeader/>
            <main>
                <RandomChar/>
            </main>
        </div>
    );
}

export default App;
