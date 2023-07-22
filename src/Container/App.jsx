import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/pages/Login";
import Registre from "../Components/pages/Registre";
import Profile from "../Components/pages/Profile";

function App () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/registre" element={<Registre/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;