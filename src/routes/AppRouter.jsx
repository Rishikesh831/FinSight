import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import LandingPage from "../pages/LandingPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                {/* More routes will be added later */}
            </Routes>
        </BrowserRouter>

    )
}