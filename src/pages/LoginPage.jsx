import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "../style/loginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", formData);
    // 로그인 로직 구현 예정
  };

  const handleGoToSignUp = () => {
    navigate("/signup");
  };

  const handleGoogleLogin = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <h2 className="login-title">로그인</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="button" className="find-pw-btn">
            비밀번호 찾기
          </button>

          <button type="submit" className="login-submit-btn">
            로그인
          </button>
        </form>

        <div className="divider"></div>
        <span className="or-text">or</span>

        <div className="auth-footer-buttons">
          <button
            type="button"
            className="create-account-btn"
            onClick={handleGoToSignUp}
          >
            회원가입
          </button>

          <button
            type="button"
            className="google-signup-btn"
            onClick={handleGoogleLogin}
          >
            <FcGoogle />
            구글로 로그인
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <p>아직 준비되지 않은 서비스입니다.</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;