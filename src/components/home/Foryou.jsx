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

const SLIDE_WIDTH = 850;

const Foryou = () => {
    const sectionRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent((prev) =>
            prev === 0 ? slideData.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrent((prev) =>
            prev === slideData.length - 1 ? 0 : prev + 1
        );
    };

    const changeSlide = (index) => {
        if (index === current) return;
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
                            }}
                        >
                            {slideData.map((slide, index) => (
                                <div className='foryou-slide' key={index}>
                                    <div className='foryou-left'>
                                        <div className='text-box'>
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
                            className={current === index ? 'bullet active' : 'bullet'}
                            onClick={() => changeSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Foryou;