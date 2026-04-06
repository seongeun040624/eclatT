import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../style/foryou.scss';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const slideData = [
    {
        title: 'Dawn Glow',
        tag: '#새벽빛 #청량',
        productImg: '/img/giftD.png',
        artImg: '/img/dawn.png',
        link: '/detail/16',
    },
    {
        title: 'Golden Hour',
        tag: '#부드러운빛 #따뜻함',
        productImg: '/img/giftG.png',
        artImg: '/img/golden.png',
        link: '/detail/17',
    },
    {
        title: 'Moon Veil',
        tag: '#은은한빛 #차분함',
        productImg: '/img/giftM.png',
        artImg: '/img/moon.png',
        link: '/detail/18',
    },
];

// 마지막 뒤에 첫 번째를 하나 더 붙여서 자연스럽게 이어지게 함
const extendedSlides = [...slideData, slideData[0]];

const SLIDE_WIDTH = 850;
const TRANSITION_TIME = 500;

const Foryou = () => {
    const sectionRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [isTransition, setIsTransition] = useState(true);

    const handlePrev = () => {
        if (!isTransition) return;

        // 첫 장에서 이전 누르면 마지막 장으로 바로 이동
        if (current === 0) {
            setIsTransition(false);
            setCurrent(slideData.length - 1);
            return;
        }

        setCurrent((prev) => prev - 1);
    };

    const handleNext = () => {
        if (!isTransition) return;
        setCurrent((prev) => prev + 1);
    };

    const changeSlide = (index) => {
        if (!isTransition) return;
        if (index === current || (current === slideData.length && index === 0)) return;
        setCurrent(index);
    };

    useEffect(() => {
        const targets = sectionRef.current.querySelectorAll('.scroll-item');

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

    useEffect(() => {
        // 복제 슬라이드(맨 마지막)에 도착하면
        // 애니메이션 끝난 뒤 transition 없이 0번으로 순간 이동
        if (current === slideData.length) {
            const timer = setTimeout(() => {
                setIsTransition(false);
                setCurrent(0);
            }, TRANSITION_TIME);

            return () => clearTimeout(timer);
        }
    }, [current]);

    useEffect(() => {
        // transition을 끈 상태에서 위치를 0으로 옮긴 직후
        // 다음 프레임에 다시 transition 켜기
        if (!isTransition) {
            const frame = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransition(true);
                });
            });

            return () => cancelAnimationFrame(frame);
        }
    }, [isTransition]);

    // bullet active 처리용
    const activeIndex = current === slideData.length ? 0 : current;

    return (
        <section className='foryou' ref={sectionRef}>
            <div className='foryou-inner'>
                <h2 className='scroll-item'>FOR YOU</h2>

                <div className='foryou-slider-wrap'>
                    <button
                        className='arrow left scroll-item'
                        onClick={handlePrev}
                    >
                        <IoIosArrowBack />
                    </button>

                    <div className='foryou-viewport scroll-item'>
                        <div
                            className='foryou-track'
                            style={{
                                transform: `translateX(-${current * SLIDE_WIDTH}px)`,
                                transition: isTransition
                                    ? `transform ${TRANSITION_TIME}ms ease`
                                    : 'none',
                            }}
                        >
                            {extendedSlides.map((slide, index) => (
                                <div className='foryou-slide' key={`${slide.title}-${index}`}>
                                    <div className='foryou-left'>
                                        <div className='text-box1'>
                                            <h3>{slide.title}</h3>
                                            <p>{slide.tag}</p>
                                        </div>

                                        <div className='product-img'>
                                            <img
                                                src={slide.productImg}
                                                alt={slide.title}
                                            />
                                        </div>

                                        <div className='btn-group'>
                                            <Link to={slide.link} className='light-btn'>
                                                see product
                                                <span>⟶</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='foryou-right'>
                                        <div className='foryou-right-content'>
                                            <img
                                                src={slide.artImg}
                                                alt={slide.title}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className='arrow right scroll-item'
                        onClick={handleNext}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>

                <div className='bullet-wrap scroll-item'>
                    {slideData.map((_, index) => (
                        <button
                            key={index}
                            className={activeIndex === index ? 'bullet active' : 'bullet'}
                            onClick={() => changeSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Foryou;