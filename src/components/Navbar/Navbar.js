import React from 'react';
import './Navbar.css';
import 'bulma/css/bulma.css';

const Navbar = () => {
    return(
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <a className="navbar-item">
                    Home
                </a>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;