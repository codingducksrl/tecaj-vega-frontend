import {Route, Routes} from "react-router";
import Home from "@pages/Home.tsx";
import HomePage from "./pages/HomePage";

function Router() {
    return (
        <Routes>            
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
    )
}

export default Router
