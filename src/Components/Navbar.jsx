import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMenu, FiX } from "react-icons/fi";
import progear from "../Assets/Logo/Progear.png";
import userIcon from "../Assets/Logo/Frame 637352.png";
import settingsIcon from "../Assets/Logo/Frame 637353.png";
import "../Styles/Navbar.css"; // External CSS

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [toggleRight, setToggleRight] = useState(20);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const updateTogglePosition = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1366) setToggleRight(56);
            else if (screenWidth >= 1024) setToggleRight(40);
            else if (screenWidth >= 768) setToggleRight(20);
            else setToggleRight(10);
        };

        updateTogglePosition();
        window.addEventListener("resize", updateTogglePosition);

        return () => window.removeEventListener("resize", updateTogglePosition);
    }, []);

    return (
        <>
            <nav className="bg-light fixed-top shadow-sm">
                <div className="screen-size nav-box container-fluid d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <Link className="navbar-brand" to="/">
                            <img src={progear} alt="Progear Logo" height="40" />
                        </Link>

                        <button
                            className="navbar-toggler d-lg-none border-0 custom-toggler"
                            type="button"
                            onClick={toggleMenu}
                            style={{ right: `${toggleRight}px` }}
                        >
                            <FiMenu />
                        </button>
                    </div>

                    <div className="collapse navbar-collapse d-none d-lg-flex main-menu position-absolute start-50 translate-middle-x">
                        <ul className="navbar-nav d-flex flex-row align-items-center justify-content-center gap-4 w-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-normal" to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-normal" to="/subscription">Subscription</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-normal" to="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="d-none d-lg-flex align-items-center gap-3">
                        <button className="btn btn-link p-0 border-0">
                            <img src={userIcon} alt="User" width="32" height="32" />
                        </button>
                        <button className="btn btn-link p-0 border-0">
                            <img src={settingsIcon} alt="Settings" width="32" height="32" />
                        </button>
                    </div>

                    <div className={`position-fixed mobile-menu bg-white vh-100 shadow-lg d-lg-none ${isMenuOpen ? "open" : "closed"}`}>
                        <button className="btn btn-link close-btn text-danger mb-3 text-black fs-5 fw-semibold" onClick={toggleMenu}>
                            <FiX />
                        </button>

                        <ul className="list-unstyled mt-5">
                            <li><Link className="d-block p-2 fw-bold text-dark text-decoration-none" to="/service">Services</Link></li>
                            <li><Link className="d-block p-2 fw-bold text-dark text-decoration-none" to="/subscription">Subscription</Link></li>
                            <li><Link className="d-block p-2 fw-bold text-dark text-decoration-none" to="/faq">FAQ</Link></li>
                        </ul>

                        <div className="d-flex gap-2 mt-3">
                            <button className="btn btn-link p-0 border-0">
                                <img src={userIcon} alt="User" width="32" height="32" />
                            </button>
                            <button className="btn btn-link p-0 border-0">
                                <img src={settingsIcon} alt="Settings" width="32" height="32" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
