import Card from "./Card";
import { connect } from 'react-redux';



function Numeros(props){ 

    const {min, max} = props

    return(
        <Card>
            <h1>min: {min}</h1>
            <h2>max : {max}</h2>
        </Card>
    )
}


function setStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}








export default connect(setStateToProps)(Numeros)