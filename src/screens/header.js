// Header.js
import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate  = useNavigate()

    function gotoorderspage(){
        navigate('/orderpage')
    }
    function gotoplaceorder(){
        navigate('/homepage')
    }
    function gotomyprofile(){
        navigate('/profile')
    }

    return (
        <header className="header">
            <div className="header-left">
                <img src="/DarulaLogo.jpeg" alt="Home" className="home-logo" onClick={gotoplaceorder}/>
                {/* <input type="search" placeholder="Search..." className="search-input" /> */}
            </div>
            <div className="text" onClick={gotoplaceorder}>placeorder</div>
            <div className="text" onClick={gotoorderspage}>orders</div>
            <img src="/42.jpg" alt="Profile" className="profile-photo" onClick={gotomyprofile}/>
        </header>
    );
}

export default Header;