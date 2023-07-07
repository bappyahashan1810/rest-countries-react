import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>WelCome To Our Site</h1>
            <nav >
                <a className='nav-class' href="/Home">Home</a>
                <a className='nav-class' href="/Countries">Countries</a>
                <a className='nav-class' href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;