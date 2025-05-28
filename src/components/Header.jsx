import Navbar from "./Navbar.jsx";
import { BrowserRouter } from "react-router-dom"

function Header() {
    return (
        <div>
            <h1 className="hero-title">Jeremy Erik Leong</h1>
            <h2 className="hero-position">Front-End Developer</h2>

            <p className="hero-description">
                I develop websites with a strong emphasis on responsive design, user-centric principles, and accessibility.
            </p>

            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </div>
    )
}

export default Header;