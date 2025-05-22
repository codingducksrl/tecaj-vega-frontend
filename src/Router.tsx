import {Route, Routes} from "react-router";
import Home from "@pages/Home.tsx";
import Page2 from "@pages/Page2.tsx";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/page2" element={<Page2/>}/>
        </Routes>
    )
}

export default Router
