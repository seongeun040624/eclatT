import React, { useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FiPlus, FiMinus, FiTrash2, FiArrowRight } from "react-icons/fi";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../style/detailtop.scss';

import { products } from "../data/products";
import { category } from "../data/category";
import { scents } from "../data/scents";


const DetailTop = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    //const { id } = useParams(); 
    const id = 1; //테스트용 끝나면 위에꺼 켜야함

    // 현재 상품 찾기
    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) return <div>로딩중...</div>; 
    // 카테고리 정보
    const categoryInfo = category[product.category];
 
    // 향 정보
    const scentInfo = scents[product.scent];
    

    const [count, setCount] = useState(1);
    const handleIncrease = () => {
        setCount(prev => prev + 1);
    };
    const handleDecrease = () => {
        setCount(prev => (prev > 1 ? prev - 1 : 1));
    };
    const price = Number(categoryInfo.price.replaceAll(',', ''));
    const totalPrice = price * count;

    return (
        <div className='detailtop'>
            <div className="sample">
                <Swiper
                    /* style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    }} */
                    spaceBetween={10}
                    /* navigation={true} */
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {product.img.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img src={img} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    >
                    {product.img.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img src={img} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="detailT_info">
                <div className='info_title'>
                    <h2>{scentInfo.name} <span>{categoryInfo.ml}</span></h2>
                    <h3>{categoryInfo.price}원</h3>
                </div>
                <div className='info_text'>
                    <p className='infoE'>{scentInfo.entext}</p>
                    <p className='infoK'>
                        {scentInfo.krtext
                            .match(/[^.]+\.?/g)
                            ?.map((text, i) => (
                            <span key={i}>
                                {text.trim()}
                                <br />
                            </span>
                            ))}
                    </p>
                </div> 
                <div className='info_note_mode'>
                    <div className='info_note'>
                        <strong>NOTES</strong>
                        <div>- Top: {scentInfo.notes.top}</div>
                        <div>- Middle: {scentInfo.notes.middle}</div>
                        <div>- Base: {scentInfo.notes.base}</div>
                    </div>
                    <div className='info_mode'>
                        <strong>MODE</strong>
                        <div>{scentInfo.mode}</div>
                    </div>
                </div>
                <div className="info_buy">
                    <div className="buy_top">
                        <span>{scentInfo.name} {categoryInfo.ml}</span>

                        <div className="count">
                            <button onClick={handleDecrease}>
                                <FiMinus />
                            </button>

                            <span>{count}</span>

                            <button onClick={handleIncrease}>
                                <FiPlus />
                            </button>
                        </div>

                        <span>{categoryInfo.price}원</span>
                    </div>

                    <div className="buy_total">
                        <span>총 상품금액({count}개)</span>
                        <span>{totalPrice}원</span>
                    </div>

                    <button className="cart_btn">Add to cart</button>
                </div>

                    
            </div>
        </div>
    );
};

export default DetailTop;