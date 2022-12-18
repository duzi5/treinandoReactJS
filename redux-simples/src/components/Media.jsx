import { connect } from "react-redux";
import Card from "./Card";



function Media(props){ 
    
    const {max, min} = props
    const media = (max + min) / 2
    
    
    return(
        <Card title="Média">
   
            <stong>{media}</stong>
        </Card>

    )
}


function mapStateToProps(state){
    return({
        min: state.numeros.min,
        max: state.numeros.max
    })
}





export default connect(mapStateToProps)(Media)