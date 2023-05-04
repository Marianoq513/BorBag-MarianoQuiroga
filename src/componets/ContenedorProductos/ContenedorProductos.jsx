import Productos from "../Productos/Productos"

const ContenedorProductos = () => {
    const props = {
        nombre:'Zapatos',
        precio: 8500
    }
  return (
    <div>
        <Productos nombre='Cartera' precio={3500} />
        <Productos nombre='Mochila' precio={4000}/>
        <Productos {...props}/>
    </div>
  )
}

export default ContenedorProductos