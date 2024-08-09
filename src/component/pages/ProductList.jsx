import React, { useState, useEffect } from 'react';

const ProductList = ({ products }) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setProductList(products);
    }, [products]);

    return (
        <>
        <div className='main-home-1'>
            <div className="se-lis">
                <h2>Product List</h2>
            </div>
        </div>
            <div className="sec-listing">
                <ul>
                    {productList.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
            </div>
            </>
    );
};

export default ProductList;
