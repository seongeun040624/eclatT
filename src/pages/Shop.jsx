import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { category } from '../data/category';
import '../style/shop.scss';

const Shop = () => {
    const location = useLocation();

    const allProducts = Object.values(category);

    let filteredProducts = allProducts;
    let currentTitle = 'SHOP';

    if (location.pathname === '/shop/perfume') {
        filteredProducts = allProducts.filter(item => item.category === 'perfume');
        currentTitle = 'PERFUME';
    } else if (location.pathname === '/shop/cream') {
        filteredProducts = allProducts.filter(item => item.category === 'handcream');
        currentTitle = 'CREAM';
    } else if (location.pathname === '/shop/oil') {
        filteredProducts = allProducts.filter(item => item.category === 'bodyoil');
        currentTitle = 'OIL';
    }

    return (
        <div className='shop'>
            <div className="shop-inner">
                <div className="shop-top">
                    <h2>{currentTitle}</h2>

                    <div className="shop-filter">
                        <Link
                            to="/shop"
                            className={location.pathname === '/shop' ? 'active' : ''}
                        >
                            ALL
                        </Link>

                        <Link
                            to="/shop/perfume"
                            className={location.pathname === '/shop/perfume' ? 'active' : ''}
                        >
                            PERFUME
                        </Link>

                        <Link
                            to="/shop/cream"
                            className={location.pathname === '/shop/cream' ? 'active' : ''}
                        >
                            CREAM
                        </Link>

                        <Link
                            to="/shop/oil"
                            className={location.pathname === '/shop/oil' ? 'active' : ''}
                        >
                            OIL
                        </Link>
                    </div>
                </div>

                <div className="shop-list">
                    {filteredProducts.map((item, index) => (
                        <div className="shop-card" key={index}>
                            <div className="shop-img">
                                <img src={item.img} alt={item.name} />
                            </div>

                            <div className="shop-info">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;