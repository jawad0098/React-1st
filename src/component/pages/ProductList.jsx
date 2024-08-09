import React, { useState, useEffect } from 'react';

const ProductList = ({ products }) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setProductList(products);
    }, [products]);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {productList.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
