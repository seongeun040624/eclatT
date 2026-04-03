import { useState } from "react";
import "../style/footer.scss";
import { Link } from 'react-router-dom';

function Footer() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-left">

            <div className="flTop">
              <p>(주)에클라 | Company Registration No.: 123-45-6789 | Telecommunication services registration No.: 제2026-서울신림-12345호</p>
              <p>주소: 00000 서울특별시관악구 신림동 에클라 빌딩 201호 | Tel: 7777-7777 | Email: eclat@eclatofficial.com</p>
              <p>Copyright © ÉCLAT. All rights reserved.</p>
            </div>
            <div className="flMid">
              <ul>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">이용약관</a></li>
              </ul>
            </div>

            <div className="fLogo"><img src="/img/logo_f.png" alt="footerLogoImg" /></div>

            {/* <p className="desc">
                ÉCLAT는 향을 통해 당신만의 순간과 분위기를 완성하는 향수 브랜드입니다.<br />
                일상 속에서 빛나는 감각적인 경험을 선사합니다.
            </p> */}
          </div>

          <div className="footer-right">

            <div className="menu">
				<a onClick={() => setModalOpen(true)}>INSTAGRAM @eclat_official</a>
              {/* <h3>MENU</h3>
              <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/wishlist'>Wishlist</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
              </ul> */}
            </div>


          </div>

        </div>

        <div className="copyright">
          	<div className="inner">
				<p>© ÉCLAT 2026</p>
				<div className="social">
					<ul>
						<li onClick={() => setModalOpen(true)}>YOUTUBE</li>
						
						<li onClick={() => setModalOpen(true)}>PINTEREST</li>
						<li onClick={() => setModalOpen(true)}>LINKEDIN</li>
						<li onClick={() => setModalOpen(true)}>FACEBOOK</li>
						<li onClick={() => setModalOpen(true)}>X(TWITTER)</li>
					</ul>
				</div>
				<div className="dummy"></div>
            </div>
          
        </div>

      </footer>

      {modalOpen && (
        <div className="modal" onClick={() => setModalOpen(false)}>
            
            <div 
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
            >
            <p>아직 준비되지 않은 서비스입니다.</p>
            <button onClick={() => setModalOpen(false)}>닫기</button>
            </div>

        </div>
        )}
    </>
  );
}

export default Footer;