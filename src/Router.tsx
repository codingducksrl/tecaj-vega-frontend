import {Route, Routes} from "react-router";
import Login from "@/pages/Login";
import Homepage from "@/pages/HomePage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Homepage/>}/>
        </Routes>
    )
}

export default Router
