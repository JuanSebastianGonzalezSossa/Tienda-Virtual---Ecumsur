import React from 'react'
import '../Styles/CartItem.css'

export const CartItem = ({ data, deleteFromCart }) => {

  let { _id, name, price, quantity } = data;

  return (
    <div className='CartItem'>
      <div className='name'>
        <h3>{name}</h3>
      </div>
      <div className='Price'>
        <h4>$ {price} x {quantity} = $ {price * quantity} </h4>
      </div>
      <div className='BoxDelete'>
        <button className='btnDelete' onClick={() => deleteFromCart(_id)} >Delete one  <i class="fa-solid fa-trash"></i></button>
        <br />
        <button className='btnDelete' onClick={() => deleteFromCart(_id, true)} >Delete all <i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}
