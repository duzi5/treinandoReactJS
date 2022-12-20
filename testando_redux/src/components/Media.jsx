import Card from './Card'; 
import { connect } from 'react-redux';

const Media = props => { 
   const {min, max} = props
   
    return(
        <Card>
            <span>
                <span>Resultado</span>
                <strong>{(min + max)/2}</strong>
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



export default connect(mapStateToProps)(Media)