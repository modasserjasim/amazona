import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = ({ addToCartHandle, cart }) => {
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // const addToCartHandle = (product) => {
    //     console.log('clicked', product);
    //     const newCart = [...cart, product];
    //     console.log(newCart);
    //     setCart(newCart);
    // }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5 md:px-16 xl:px-32'>
            <div className='col-span-1 md:col-span-2 lg:col-span-3 sm:my-20 my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {products.map(product => <Product key={product.id} product={product} addToCartHandle={addToCartHandle}></Product>)}
                </div>
            </div>
            <div className='hidden sm:block sm:col-span-1 rounded-lg bg-accent p-10'>
                <div className='lg:fixed'>
                    <h2 className='text-3xl'>Cart Summary</h2>
                    <div className='my-8 leading-10'>
                        <p>Selected Items: {cart.length}</p>
                        <p>Total Price: $1140</p>
                        <p>Total Shipping Charge: $5</p>
                        <p>Tax: $114</p>
                        <h3 className='text-lg mt-5 font-medium'>Grand Total: $1559</h3>

                    </div>
                    <button className="btn bg-gray-400 border-0 rounded-b-md rounded-t-none lg:w-60">
                        <span className='mr-1'>Clear Cart</span>
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>

                    </button>
                    <button className="btn btn-primary mt-3 text-white border-0 rounded-b-md rounded-t-none lg:w-60">
                        <span className='mr-1'>Continue to Checkout</span>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>

                    </button>
                </div>

            </div>
        </div>
    );
};

export default Shop;