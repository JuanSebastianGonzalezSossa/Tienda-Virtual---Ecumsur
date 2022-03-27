import React from 'react'
import { Link, useParams } from 'react-router-dom';
import '../Styles/ProductDisplyPage.css';

export const ProductDisplayPage = () => {

  const Parametros = useParams();
  console.log(Parametros);

  return (
    <div className='content'>
      <div className='box'>
        <Link to={"/"}>
          <div className='back'>
            <i class="fa-solid fa-arrow-left-long"> Volver al articulo </i>
          </div>
        </Link>
        <br /><br />
        <h1>Detail about {Parametros.name} </h1>
      </div>
      <div className='box price'>
        <h2>Price: $ {Parametros.price}</h2>
        <h2>Stock: {Parametros.countInStock}</h2>
      </div>
      <div className='box brand'>
        <h2>Brand: {Parametros.brand}  </h2>
        <h2>Category: {Parametros.category}</h2>
      </div>
      <div className='box description'>
        <h3>{Parametros.description}</h3>
      </div>
      <div className='box rating'>
        <h4>{Parametros.rating} <i className="ranting-ico fa-solid fa-ranking-star"></i></h4>
        <h4>{Parametros.numReviews} <i className="eye fa-solid fa-eye"></i></h4>
      </div>
    </div>
  )
}
