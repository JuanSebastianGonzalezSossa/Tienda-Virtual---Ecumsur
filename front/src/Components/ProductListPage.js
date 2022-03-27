import React, { useReducer } from 'react'
import { useFetchProducts } from '../hooks/UseFetchProducts'
import { shoppingInicialState, ShoppingReducer } from '../Reducers/ShoppingReducer';
import { ProductItem } from './ProductItem';
import { CartItem } from './CartItem'
import '../Styles/ProductListPage.css'
import { Types } from '../Actions/ShoppingActions';

export const ProductListPage = () => {

  const { data: products, loading } = useFetchProducts();

  const [state, dispatch] = useReducer(ShoppingReducer, shoppingInicialState);

  const { cart } = state;

  const addToCart = (id) => {
    dispatch({ type: Types.AddToCart, payload: id })
  }

  const deleteFromCart = (id, all=false, ) => {
    if (all) {
      dispatch({type: Types.RemoveAllFromCart, payload: id })
    } else {
      dispatch({type: Types.RemoveOneFromCart, payload: id })}
  }

  const ClearCart = () => {
    dispatch({ type: Types.ClearCart })
  }

  return (
    <div>
      {loading && <p>loading...</p>}
      <article className='Cartbox'>
      <i className="cart fa-solid fa-cart-shopping"> Cart (0) </i>
        <button onClick={ClearCart} className="btnClearCart"> <i class="fa-solid fa-trash-can"> ClearCart </i>
        </button>
        <div>
          {
            cart.map((item, i) => (
              <CartItem key={i} data={item} deleteFromCart={deleteFromCart}
              />
            ))
          }
        </div>
      </article>
      <div className='Card-Product'>
        {
          products.map((Prod, i) => (
            <ProductItem
              key={i}
              prod={Prod}
              addToCart={addToCart}
            />
          ))
        }
      </div>

    </div>
  )
}
