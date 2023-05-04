import React from 'react'

const Productos = ({nombre, precio}) => {
  return (
    <div>
 
        <h2>{nombre}</h2>
        <p>Precio: {precio}</p>
        <button>Agregar al carrito</button>
    </div>
  )
}

export default Productos