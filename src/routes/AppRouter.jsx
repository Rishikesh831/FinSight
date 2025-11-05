import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import LandingPage from "../pages/LandingPage";
// import DashboardPage from "../pages/DashboardPage";
// import InvestmentPage from "../pages/InvestmentPage";
import DetailsPage from "../pages/DetailsPage";
import QuadrantPage from "../pages/QuadrantPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                {/* More routes will be added later */}
                {/* <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path="/investments" element={<InvestmentPage/>}/> */}
                <Route path="/details" element={<DetailsPage/>}/>
                <Route path="/quadrant" element={<QuadrantPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}