import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

    return (
        <div className="nav">
            <>
                <Link className="navLink" to="/timer">
                    Timer
                </Link>
                <Link className="navLink" to="/timer1">
                    Timer 1
                </Link>
                <Link className="navLink" to="/timer2">
                    Timer 2
                </Link>
                <Link className="navLink" to="/timer3">
                    Timer 3
                </Link>
                <Link className="navLink" to="/grid">
                    Grid
                </Link>
            </>
        </div>
    );
}

export default Nav;
