import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMenu, FiX } from "react-icons/fi";
import progear from "../Assets/Logo/Progear.png";
import userIcon from "../Assets/Logo/Frame 637352.png";
import settingsIcon from "../Assets/Logo/Frame 637353.png";
import "../Styles/common.css";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [toggleRight, setToggleRight] = useState(20); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const updateTogglePosition = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1366) {
                setToggleRight(56); 
            } else if (screenWidth >= 1024) {
                setToggleRight(40); 
            } else if (screenWidth >= 768) {
                setToggleRight(20);
            } else {
                setToggleRight(10);
            }
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
                        {/* LOGO */}
                        <Link className="navbar-brand" to="/">
                            <img src={progear} alt="Progear Logo" height="40" />
                        </Link>

                        {/* MOBILE MENU TOGGLER */}
                        <button 
                            className="navbar-toggler d-lg-none border-0"
                            type="button"
                            onClick={toggleMenu}
                            style={{ 
                                fontSize: "32px", 
                                background: "none",
                                position: "relative",
                                right: `${toggleRight}px`,
                            }}
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

                    
                    <div 
                        className={`position-fixed bg-white vh-100 shadow-lg d-lg-none transition ${isMenuOpen ? "open" : "closed"}`}
                        style={{
                            right: isMenuOpen ? "0" : "-250px",
                            top: "0",
                            width: "250px",
                            transition: "right 0.3s ease-in-out",
                            zIndex: "999",
                            padding: "20px"
                        }}
                    >
                        
                        <button 
                            className="btn btn-link text-danger mb-3 text-black fs-5 fw-semibold"
                            onClick={toggleMenu}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px"
                            }}
                        >
                            <FiX /> 
                        </button>

                        
                        <ul className="list-unstyled mt-5">
                            <li><Link className="d-block p-2 fw-bold text-dark text-decoration-none" to="/service">Services</Link></li>
                            <li><Link className="d-block p-2 fw-bold text-dark text-decoration-none" to="/subscription">Subscription</Link></li>
                            <li><Link className="d-block p-2 fw-bold text-dark text-decoration-none" to="/faq">FAQ</Link></li>
                        </ul>

                        {/* MOBILE USER ICONS */}
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

            {/* CUSTOM STYLES */}
            <style>
                {`
                    .open { right: 0 !important; }
                    .closed { right: -250px !important; }

                    .main-menu ul {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                    }

                    @media (max-width: 1366px) {
                        nav {
                            width: 100% !important;
                            padding-left: 20px !important;
                            // padding-right: 20px !important;
                        }
                    }

                    @media (max-width: 1024px) {
                        .navbar-toggler {
                            right: 40px !important;
                        }
                    }

                    @media (max-width: 768px) {
                        nav {
                            width: 100% !important;
                        }
                        .navbar-toggler {
                            right: 20px !important;
                            font-size: 28px !important;
                        }
                             .nav-box {
                            padding: 0px !important;
                        }
                    }
                    
                    @media (max-width: 320px) {
                        .nav-box {
                            padding: 0px !important;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Navbar;
