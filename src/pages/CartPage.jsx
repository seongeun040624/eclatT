import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus, FiTrash2, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { products } from "../data/products";
import { category } from "../data/category";
import { scents } from "../data/scents";
import "../style/cartPage.scss";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { productId: 1, quantity: 1 },
    { productId: 7, quantity: 2 },
    { productId: 12, quantity: 1 },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [pendingRemoveId, setPendingRemoveId] = useState(null);

  const openModal = (type, message, productId = null) => {
    setModalType(type);
    setModalMessage(message);
    setPendingRemoveId(productId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
    setModalMessage("");
    setPendingRemoveId(null);
  };

  const cartViewItems = useMemo(() => {
    return cartItems
      .map((cartItem) => {
        const product = products.find((item) => item.id === cartItem.productId);
        if (!product) return null;

        const categoryInfo = category[product.category];
        const scentInfo = scents[product.scent];

        return {
          id: product.id,
          quantity: cartItem.quantity,
          image: product.img?.[0] || "",
          name: scentInfo?.name || "상품명",
          price: Number(String(categoryInfo?.price || "0").replace(/,/g, "")),
          category: product.category,
          scent: product.scent,
        };
      })
      .filter(Boolean);
  }, [cartItems]);

  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    const shopProducts = products.filter((item) =>
      ["perfume", "handcream", "bodyoil", "gift"].includes(item.category)
    );

    const shuffled = [...shopProducts].sort(() => 0.5 - Math.random());

    const mappedRecommended = shuffled.slice(0, 5).map((item) => {
      const scentInfo = scents[item.scent];
      const categoryInfo = category[item.category];

      return {
        id: item.id,
        name: scentInfo?.name || "상품명",
        image: item.img?.[0] || "",
        price: categoryInfo?.price || "0",
      };
    });

    setRecommendedItems(mappedRecommended);
  }, []);

  const updateQuantity = (productId, delta) => {
    const targetItem = cartItems.find((item) => item.productId === productId);
    if (!targetItem) return;

    const newQuantity = targetItem.quantity + delta;

    if (newQuantity < 1) {
      openModal("remove", "해당 상품을 장바구니에서 삭제하시겠습니까?", productId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (productId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.productId !== productId)
    );
  };

  const handleModalConfirm = () => {
    if (modalType === "remove" && pendingRemoveId !== null) {
      removeItem(pendingRemoveId);
    }
    closeModal();
  };

  const subtotal = cartViewItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50000 || subtotal === 0 ? 0 : 3000;
  const total = subtotal + shipping;

  return (
    <div className="cart-page-container">
      <div className="cart-main-layout">
        <section className="cart-list-section">
          <h2 className="section-title">My Cart</h2>

          <div className="cart-header">
            <span>상품</span>
            <span>수량</span>
            <span>가격</span>
            <span></span>
          </div>

          {cartViewItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="product-info">
                <div className="img-box">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="product-text">
                  <span className="product-name">{item.name}</span>
                  <span className="product-meta">
                    {/* {item.category} */}
                  </span>
                </div>
              </div>

              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, -1)}>
                  <FiMinus size={14} />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>
                  <FiPlus size={14} />
                </button>
              </div>

              <div className="price-box">
                {(item.price * item.quantity).toLocaleString()} 원
              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  openModal(
                    "remove",
                    "해당 상품을 장바구니에서 삭제하시겠습니까?",
                    item.id
                  )
                }
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          ))}

          {cartViewItems.length === 0 && (
            <p className="empty-msg">장바구니가 비었습니다.</p>
          )}
        </section>

        <aside className="summary-section">
          <h3 className="summary-title">결제 예상 금액</h3>

          <div className="coupon-area">
            <input type="text" placeholder="your coupon code" />
            <button>확인</button>
          </div>

          <div className="summary-details">
            <div className="detail-row">
              <span>상품 금액</span>
              <span>{subtotal.toLocaleString()} 원</span>
            </div>
            <div className="detail-row">
              <span>배송비</span>
              <span>{shipping === 0 ? "무료" : `${shipping.toLocaleString()} ₩`}</span>
            </div>
            <div className="total-row">
              <span>총 결제 금액</span>
              <span>{total.toLocaleString()} 원</span>
            </div>
          </div>

          <div className="checkout-buttons">
            <button
                className="btn-black"
                onClick={() =>
                openModal("info", "아직 준비되지 않은 서비스입니다.")
                }
            >
                결제
            </button>

            <button
                className="btn-white"
                onClick={() =>
                openModal("info", "아직 준비되지 않은 서비스입니다.")
                }
            >
                비회원 구매
            </button>
            </div>
        </aside>
      </div>

      <section className="recommendation-section">
        <h2 className="recommend-title">You May Like</h2>

        <Swiper
          spaceBetween={25}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {recommendedItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="recommend-card">
                <div className="recommend-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <p>{item.name}</p>

                <Link to={`/detail/${item.id}`} className="watch-btn">
                  watch product <FiArrowRight size={14} />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <p>{modalMessage}</p>

            <div className="modal-btn-wrap">
              <button className="modal-cancel-btn" onClick={closeModal}>
                닫기
              </button>
              <button className="modal-confirm-btn" onClick={handleModalConfirm}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;