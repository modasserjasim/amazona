import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, addToCartHandle }) => {
    const { name, img, price, seller, ratings } = product;
    return (
        <div>
            <div className="card h-full relative rounded-lg bg-base-100 border-[#95A0A7] border">
                <figure><img className='p-[7px] rounded-xl' src={img} alt="Shoes" /></figure>
                <div className="card-body p-0">
                    <div className='p-[20px]'>
                        <h2 className="card-title">{name}</h2>
                        <p>Price: ${price}</p>
                        <p className='text-sm mt-7'>Manufacturer : {seller}</p>
                        <p className='text-sm'>Rating : {ratings}</p>
                    </div>
                    <div className="card-actions mt-10">
                        <button onClick={() => addToCartHandle(product)} className="w-full btn btn-accent rounded-b-lg rounded-t-none absolute bottom-0">
                            <span className='mr-1'>Add to Cart</span>
                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>

                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;