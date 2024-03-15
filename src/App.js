import "./scss/App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import TopBar from "./components/TopBar";
import { pageList } from "./data/links";
import Footer from "./components/Footer";

function App() {
    const routeList = pageList.map((page) => {
        return page.route();
    });

    return (
        <div className="app-background">
            <HashRouter>
                <TopBar/>
                <div className="">
                    <Routes>
                        <Route exact path="/" Component={Homepage} />
                        {routeList}
                    </Routes>
                </div>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
