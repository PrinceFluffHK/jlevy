// import logo from "./logo.svg";
import "./scss/App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import TopBar from "./components/TopBar";
import { pageList } from "./data/links";

function App() {
    const routeList = pageList.map(page => {
        return page.route()
    })
    
    return (
        <div className="App">
            <HashRouter>
                <TopBar/>
                <Routes>
                    <Route exact path="/" Component={Homepage} />
                    {routeList}
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
