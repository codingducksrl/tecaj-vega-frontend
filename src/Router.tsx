import {Route, Routes} from "react-router";
import Login from "@pages/Login.tsx";

function Router() {
    return (
        <Routes>
          
            <Route path="/" element={<Login/>}/>
            
        </Routes>
    )
}

export default Router
