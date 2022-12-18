import Card from "./Card"
import { connect } from 'react-redux'
 

function Soma (props){

    const {min, max} = props
    const soma = min + max
    
    return (
        <Card title="Soma">
            <h1>{soma}</h1>

        </Card>
    )


}


function mapStateToProps (state){
    return(
        {
            min : state.numeros.min, 
            max : state.numeros.max
        }
    )
}

export default connect(mapStateToProps)(Soma)