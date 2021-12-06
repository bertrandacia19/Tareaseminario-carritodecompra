import { useContext } from 'react'
import{Cantidad} from '../../App'
import { Carro } from '../Carro'
import  {Navegacion} from './styles'


export const Navbar = ({ productos ,removeProducto}) => {
    let cantidad=useContext(Cantidad)
    return (
        <Navegacion>
            <p>ART|LIFE</p>
            <Carro cantidad={cantidad} productos={productos} removeProducto={removeProducto}/>
        </Navegacion>
    )
}
