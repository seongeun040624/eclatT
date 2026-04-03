import React, { useEffect, useRef, useState } from 'react';
import '../../style/hero.scss';

const heroImages = [
  '/img/main1.jpg',
  '/img/main2-text.jpg',
  '/img/main3-text.jpg',
];

const Hero = () => {
	const heroRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const lastIndex = heroImages.length - 1;

	useEffect(() => {
		const handleWheel = (e) => {
		if (!heroRef.current) return;

		const rect = heroRef.current.getBoundingClientRect();
		const heroTop = rect.top;
		const heroBottom = rect.bottom;

		const heroInView = heroTop <= 0 && heroBottom >= window.innerHeight;

		if (!heroInView) return;

		if (isAnimating) {
			e.preventDefault();
			return;
		}

		const delta = e.deltaY;

		if (delta > 0) {
			if (activeIndex < lastIndex) {
			e.preventDefault();
			setIsAnimating(true);
			setActiveIndex((prev) => prev + 1);

			setTimeout(() => {
				setIsAnimating(false);
			}, 850);
			}
		} else if (delta < 0) {
			if (activeIndex > 0) {
			e.preventDefault();
			setIsAnimating(true);
			setActiveIndex((prev) => prev - 1);

			setTimeout(() => {
				setIsAnimating(false);
			}, 850);
			}
		}
		};

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeIndex, isAnimating, lastIndex]);

  const handleBulletClick = (index) => {
    if (index === activeIndex || isAnimating) return;

    setIsAnimating(true);
    setActiveIndex(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 850);
  };

  return (
    <section className="hero" ref={heroRef}>
		<div
			className="hero-track"
			style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
		>
        {heroImages.map((image, index) => (
			<div className="hero-slide" key={index}>
				<img src={image} alt={`hero-${index + 1}`} />
			</div>
        ))}
      </div>

		<div className="hero-pagination">
			{heroImages.map((_, index) => (
			<button
				key={index}
				type="button"
				className={`hero-bullet ${activeIndex === index ? 'active' : ''}`}
				onClick={() => handleBulletClick(index)}
				aria-label={`Go to slide ${index + 1}`}
			/>
			))}
		</div>
    </section>
  );
};

export default Hero;