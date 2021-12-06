import { Articulo } from "../Articulo";
import  { Compo } from './styles'

export const Articulos = (props) => {
    const productos = props.data.articulos
    const agregarAlCarro = props.agregarAlCarro

    return (
        <Compo>
            {
                productos.map(prod => 
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                )
            }
        </Compo>
    )
}