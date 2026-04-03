import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IoSearchOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";

import '../style/header.scss';

const Header = () => {
  const location = useLocation();
  const [isHeroHeader, setIsHeroHeader] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleHeaderMode = () => {
      // 홈이 아니면 무조건 기본 헤더(2번 이미지)
      if (location.pathname !== '/') {
        setIsHeroHeader(false);
        return;
      }

      const heroSection = document.getElementById('home-hero');

      if (!heroSection) {
        setIsHeroHeader(false);
        return;
      }

      const rect = heroSection.getBoundingClientRect();

      // hero 영역이 화면 상단 기준으로 아직 보이면 hero 스타일 유지
      if (rect.bottom > 80) {
        setIsHeroHeader(true);
      } else {
        setIsHeroHeader(false);
      }
    };

    handleHeaderMode();

    window.addEventListener('scroll', handleHeaderMode);
    window.addEventListener('resize', handleHeaderMode);

    return () => {
      window.removeEventListener('scroll', handleHeaderMode);
      window.removeEventListener('resize', handleHeaderMode);
    };
  }, [location.pathname]);

  return (
    <header className={`header ${isHeroHeader ? 'hero-header' : 'default-header'}`}>
      <div className="header-inner">

        <div className="header-left">
          <h1 className="header-logo hero-logo">
            <Link to="/" className="logo" onClick={scrollToTop}>
              <img src="/img/logo_f.png" alt="headerLogoImg" />
            </Link>
          </h1>

          <nav className="header-nav">
            <div className="gnb-item">
              <Link to="/" onClick={scrollToTop}>HOME</Link>
            </div>

            <div className="gnb-item shop-item">
              <Link to="/shop">SHOP</Link>

              <div className="sub-menu">
                <Link to="/shop/perfume">PERFUME</Link>
                <Link to="/shop/cream">CREAM</Link>
                <Link to="/shop/oil">OIL</Link>
                <Link to="/shop/gift">GIFT</Link>
              </div>
            </div>

            <div className="gnb-item">
              <Link to="/story">STORY</Link>
            </div>

            {/* <div className="gnb-item">
              <Link to="/gift">GIFTS</Link>
            </div> */}
          </nav>
        </div>

        <h1 className="header-center">
          <Link to="/" className="logo" onClick={scrollToTop}>
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