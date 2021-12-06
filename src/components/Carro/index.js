import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import  {Carrocontenedor,Carros,Listart,Ul,Li,Delete} from './styles'

export const Carro = ({ cantidad, productos,removeProducto}) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto




    return (
        <Carrocontenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Carros onClick={handleMostrarCarro} >
                Carro
            </Carros>
            {
                (cantidad > 0 && mostrarCarro) &&
                    <Listart>
                        <Ul>
                            {
                                productos.map(x => {
                                    return (
                                        <Li  key = {x.nombre}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span>{x.nombre}</span><Delete onClick={() => removeProducto(x.nombre)}>X</Delete> 
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </Li>
                                    )
                                })
                            }
                            <Li>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Li>
                        </Ul>
                    </Listart>
            }
        </Carrocontenedor>

    )
 
}
