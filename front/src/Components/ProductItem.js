import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ProductItem.css';

export const ProductItem = ({prod, addToCart}) => {

    let { _id, name, image, description, brand, category, countInStock, price, rating, numReviews } = prod;
    const Imagen = "http://localhost:5000" + image;

    return (
        <div>
            <div className="container" >
                
                    <div className="card" alt="Click to more details">
                    
                    <div className='name'>
                        <h1>{name}</h1>
                    </div>
                    <Link to={`/ProductDisplayPage/${_id}/${name}/${description}/${brand}/${category}/${price}/${countInStock}/${rating}/${numReviews}`}>
                    <div className="imgBx" >
                        <img src={Imagen} alt={name}></img>
                    </div>
                    </Link>
                    <div className="contentBx">
                        <div className="price">
                            <h2>Price: $ {price} </h2>
                        </div>

                        <div className="countInStock">
                            <h3>Stock: {countInStock}</h3>
                        </div>

                        <div className="ranting">
                            <div className="ranting">
                                <h3 >{rating}</h3> <i className="ranting-ico fa-solid fa-ranking-star"></i>
                            </div>
                            <div className="ranting">
                                <h3>{numReviews}</h3><i className="eye fa-solid fa-eye"></i>
                            </div>
                        </div>
                        <button onClick={()=> addToCart(_id)} className="btn" > Add item to cart <i className="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
