import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // 경로(URL)가 바뀔 때마다 실행

  return null; // 화면에 아무것도 그리지 않음
}