import './category.styles.scss';
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';
import Spinner from '../spinner/spinner.component';

const Category = () => {
    const { category } = useParams();
    console.log(useParams())
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    // const products = categoriesMap[category];
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    return (
        <Fragment>
            <h2 className='category-title' >{category.toUpperCase()}</h2>
            {isLoading ? (<Spinner />) :
                (<div className='category-container' >

                    {products &&
                        products.map((product) =>
                            <ProductCard key={product.id} product={product} />
                        )
                    }
                </div>)
            }
        </Fragment>
    )
}
export default Category