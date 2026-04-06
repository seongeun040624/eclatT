import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { products } from "../data/products";
import { category } from "../data/category";
import { scents } from "../data/scents";
import "../style/shop.scss";

const Shop = () => {
  const location = useLocation();
  const [visibleCount, setVisibleCount] = useState(9);

  const shopProducts = products.filter((item) =>
    ["perfume", "handcream", "bodyoil", "gift"].includes(item.category)
  );

  let filteredProducts = shopProducts;
  let currentTitle = "All Products";
  let isAllPage = location.pathname === "/shop";

  if (location.pathname === "/shop/perfume") {
    filteredProducts = shopProducts.filter(
      (item) => item.category === "perfume"
    );
    currentTitle = "Perfume";
    isAllPage = false;
  } else if (location.pathname === "/shop/cream") {
    filteredProducts = shopProducts.filter(
      (item) => item.category === "handcream"
    );
    currentTitle = "Cream";
    isAllPage = false;
  } else if (location.pathname === "/shop/oil") {
    filteredProducts = shopProducts.filter(
      (item) => item.category === "bodyoil"
    );
    currentTitle = "Oil";
    isAllPage = false;
  } else if (location.pathname === "/shop/gift") {
    filteredProducts = shopProducts.filter(
      (item) => item.category === "gift"
    );
    currentTitle = "Gift";
    isAllPage = false;
  }

  useEffect(() => {
    setVisibleCount(9);
  }, [location.pathname]);

  const displayedProducts = isAllPage
    ? filteredProducts.slice(0, visibleCount)
    : filteredProducts;

  const hasMoreProducts = isAllPage && visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="shop">
      <div className="shop-inner">
        <div className="shop-top">
          <div className="shop-title-line"></div>
          <h2>{currentTitle}</h2>

          <div className="shop-filter">
            <Link
              to="/shop"
              className={location.pathname === "/shop" ? "active" : ""}
            >
              ALL
            </Link>

            <Link
              to="/shop/perfume"
              className={location.pathname === "/shop/perfume" ? "active" : ""}
            >
              PERFUME
            </Link>

            <Link
              to="/shop/cream"
              className={location.pathname === "/shop/cream" ? "active" : ""}
            >
              CREAM
            </Link>

            <Link
              to="/shop/oil"
              className={location.pathname === "/shop/oil" ? "active" : ""}
            >
              OIL
            </Link>
            <Link
              to="/shop/gift"
              className={location.pathname === "/shop/gift" ? "active" : ""}
            >
              GIFT
            </Link>
          </div>
        </div>

        <div className="shop-list">
          {displayedProducts.map((item) => {
            const categoryInfo = category[item.category];
            const scentInfo = scents[item.scent];

            const productName = scentInfo?.name || "상품명";
            const productNotes = scentInfo?.notes
              ? `${scentInfo.notes.top} | ${scentInfo.notes.middle} | ${scentInfo.notes.base}`
              : "향 노트 정보 없음";

            return (
              <Link
                to={`/detail/${item.id}`}
                className="shop-card"
                key={item.id}
              >
                <div className="shop-card__image">
                  <img src={item.img[0]} alt={productName} />
                </div>

                <div className="shop-card__info">
                  <span className="shop-card__sub">
                  {item.category === "perfume"
                    ? "EAU DE TOILETTE"
                    : item.category === "handcream"
                    ? "HAND CREAM"
                    : "BODY OIL"}
                </span>
                  <h3>{productName}</h3>
                  <p className="shop-card__desc">{productNotes}</p>
                  <p className="shop-card__price">
                    {categoryInfo?.price || "00,000"} 원
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {isAllPage && hasMoreProducts && (
          <div className="shop-bottom">
            <button
              type="button"
              className="shop-end-btn"
              onClick={handleLoadMore}
            >
              <span>MORE</span>
              <span className="arrow">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;