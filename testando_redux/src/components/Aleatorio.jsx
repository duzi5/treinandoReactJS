import Card from './Card';
import { connect } from 'react-redux';

const Aleatorio = props => { 
    
    const {min, max} = props
    
    return(
        <Card>
            <span>
                <span>Resultado</span>
                <strong>{parseInt(Math.random() * (max - min) + min)}</strong>
            </span>
        </Card>
    )
}



function mapStateToProps(state){ 
    return{
        min: state.numeros.min,
        max: state.numeros.max

    }
}



export default connect(mapStateToProps)(Aleatorio)