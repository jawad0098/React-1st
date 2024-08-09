import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>

            <nav>
                <div className="sec-main">
                    <div className="sec-logo">
                        <h1>logo</h1>
                    </div>
                    <div className="list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                </div>
              



            </nav>
        </header>
    );
};

export default Header;
