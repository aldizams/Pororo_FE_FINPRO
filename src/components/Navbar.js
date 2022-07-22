import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0474/7070/6841/files/Untitled_design_598ca442-953d-46e5-a2b0-cdabb3b34464_1200x1200.png?v=1643718874" alt="logo" />
                    </a>

                    <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item">
                            Breed
                        </a>
                        <a href="/article" className="navbar-item">
                            Artikel
                        </a>
                        <a href="/adopt" className="navbar-item">
                            Adopt
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar