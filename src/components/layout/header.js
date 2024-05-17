import React from 'react';
import './header.css';

function Header() {
    return (
        <>
            <div className="title-section">
                <img src="images/fureverfound.png" alt="FureverFound Title Image" />
                <h2>Bringing lost pets back to their loving arms</h2>
            </div>
            <div className="image-section">
                <img src="images/Header.jpeg" alt="Header Image" />
            </div>
        </>
    );
}

export default Header;
