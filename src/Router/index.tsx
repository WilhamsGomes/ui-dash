import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../view/pages/Dashboard/dashboard";
import Library from "../view/pages/Library/library";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/library" element={<Library />}/>
            </Routes>
        </BrowserRouter>
    )
}