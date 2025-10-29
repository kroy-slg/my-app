import { Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/Home.jsx";
import Navbar from "../src/components/layout/Navbar.jsx";
import About from "../src/components/pages/About.jsx";
import Services from "../src/components/pages/Services.jsx";
import Contact from "../src/components/pages/Contact.jsx";
import Profile from "../src/components/pages/Profile.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

export default App;
