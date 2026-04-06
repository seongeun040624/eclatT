import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../style/about.scss';

const About = () => {
    useEffect(() => {
        const targets = document.querySelectorAll(
            '.about-title, .about-line, .about-text p, .about-img'
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        targets.forEach((el) => {
            observer.observe(el);

            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('show');
            }
        });

        return () => {
            targets.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section className="about">
            <div className="about-inner">
                <div className="about-title">
                    <h2>BRAND STORY</h2>
                </div>

                <div className="about-line">
                    <span></span>
                    <p>×</p>
                    <span></span>
                </div>

                <div className="about-text">
                    <p>
                        세상에는 눈에 보이는 빛뿐만 아니라,<br />
                        사람마다 가지고 있는 고유한 ‘내면의 빛’이 존재합니다.<br /><br />

                        ÉCLAT는 그 보이지 않는 빛을 향으로 풀어냅니다.<br /><br />

                        향은 단순히 좋은 냄새가 아닌 기억을 불러오는 또 하나의 빛입니다.<br />
                        그리고 그 빛은 자연에서 옵니다.<br /><br />

                        ÉCLAT는 자연을 해치지 않고, 동물 실험 없이 만들어진 비건 향료를 사용해
                        가장 순수한 방식으로 향을 전달합니다.
                    </p>
                </div>

                <div className="about-img">
                    <Link to="/story">
                        <p>View Story</p>
                        <img src="/img/sub3.png" alt="brand story" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;