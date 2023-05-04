import React from 'react'
import './CardWidget.css'
const CardWidget = () => {
    const imgCarro = 'https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png'
  return (
    <div>
        <img className='imgCarrito' src={imgCarro} alt="Carrito de compras" />
        <strong>1</strong>
    </div>
  )
}

export default CardWidget