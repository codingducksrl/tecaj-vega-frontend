import {Route, Routes} from "react-router";
import Login from "@/pages/Login";
import HomePage from "@/pages/HomePage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
    )
}

export default Router
