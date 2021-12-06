import  { Burbujas} from './styles'




export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <Burbujas>
            {cantidad > 9 ? '9+' : cantidad}
        </Burbujas>
    )
}