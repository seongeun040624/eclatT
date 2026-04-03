import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IoSearchOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";

import '../style/header.scss';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    return (
        <header className={`header ${isHome ? 'home-header' : 'sub-header'} ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-inner">

                <div className="header-left">
                    <div className="gnb-item">
                        <Link to="/">HOME</Link>
                    </div>

                    <div className="gnb-item shop-item">
                        <Link to="/shop">SHOP</Link>

                        <div className="sub-menu">
                            <Link to="/shop/perfume">PERFUME</Link>
                            <Link to="/shop/cream">CREAM</Link>
                            <Link to="/shop/oil">OIL</Link>
                        </div>
                    </div>

                    <div className="gnb-item">
                        <Link to="/story">STORY</Link>
                    </div>

                    <div className="gnb-item">
                        <Link to="/gift">GIFT</Link>
                    </div>
                </div>

                <h1 className="header-center">
                    <Link to="/" className="logo">
                        <img src="/img/logo.png" alt="headerLogoImg" />
                    </Link>
                </h1>

                <div className="header-right">
                    <Link to="/signup" className='signup'>JOIN US</Link>
                    <Link to="/login" className='login'>LOGIN</Link>

                    <button className="search-btn" type="button">
                        <IoSearchOutline className='searchIcon' />
                    </button>

                    <Link to="/cart" className="cart-link">
                        <PiBag className='searchIcon' />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;