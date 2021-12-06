import { Fragment, useState,useEffect,useRef} from 'react'
import React from 'react'
import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'


// base de datos
const informacion = {
  articulos: [
    {id: 1, nombre: 'Cuadro de Kronii', precio: 300, imagen: '/images/1.jpeg'},
    {id: 2, nombre: 'Cuadro de Chowder', precio: 300, imagen: '/images/2.jpeg'},
    {id: 3, nombre: 'Cuadro de Lloyd Irving', precio: 400, imagen: '/images/3.jpeg'},
    {id: 4, nombre: 'CUadro Capitan America', precio: 300, imagen: '/images/5.jpeg'},
    {id: 5, nombre: 'Cuadro de Banjo ', precio: 300, imagen: '/images/6.jpeg'},
    {id: 6, nombre: 'Cuadro de Tina', precio: 300, imagen: '/images/7.jpeg'}
  ],
  carrito: [
    //{id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg', cantidad: 2},
  ]
}

export const Cantidad=React.createContext()

function App() {
  const [data, setData] = useState(informacion)
  const [cantidad,setCantidad] =useState(0)
  const borrandopro=useRef()
  console.log(data)


  const agregarAlCarro = (producto) => {
    // 1- Verificar si el producto clickeado ya està en el carrito
    if (data.carrito.find(x => x.id === producto.id)) {
      // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
      const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }

    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
  }

  // App > Navbar > Carro > Burbuja > Numero de productos

  // let cantidad = data.carrito.length
 // let cantidad = data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)

  const removeProducto = (nombre) =>{
		if(window.confirm("¿Quieres eliminar  producto?")){
			data.carrito.forEach((x, index)=>{
				if(x.nombre === nombre){
        borrandopro.current=x.nombre;
				data.carrito.splice(index, 1)
				}
			})
			setData({...data})
		}
	}

  useEffect(() =>{
    setCantidad(data.carrito.reduce((acum,actual)=> acum+actual.cantidad,0))
  })

  return (
    <Cantidad.Provider value={cantidad}>
          <Fragment>
            <Navbar  productos={data.carrito} removeProducto={removeProducto}/>
            <Articulos agregarAlCarro={agregarAlCarro} data={data} />
          </Fragment>
    </Cantidad.Provider>
  );
}


export default App;
