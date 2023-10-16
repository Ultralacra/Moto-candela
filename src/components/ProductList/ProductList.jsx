import React, { useState, useEffect } from 'react'
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { Card } from '../Card/Card';
import { Pager } from '../Pager/Pager';
import './ProductList.scss';

export const ProductList = ({ products, categories, searchBarLabel = 'Nombre', criteria = '', handleNavigation }) => {
    const [productList, setProductList] = useState(products)

    useEffect(() => {
        setProductList(products);
    }, [products])

    const handleDataChange = (name, category) => {
        const filteredProducts = products
            .filter(product => {
                return (category
                    ? (product.name.toLowerCase().includes(name.toLowerCase()) && product.category === category) || product?.[criteria]?.toString().includes(name)
                    : product.name.toLowerCase().includes(name.toLowerCase()) || product?.[criteria]?.toString().includes(name))
            })
        setProductList(filteredProducts);
    }
    return (
        <div className='list'>
            <SearchFilterBar label={searchBarLabel} categories={categories} handleDataChange={handleDataChange} />
            <div className='list__products'>
                {productList.map(product => (
                    <Card product={product} handleNavigation={handleNavigation} key={product.id} criteria={criteria || "category"} />
                ))}
            </div>
            <Pager />
        </div>
    )
}
