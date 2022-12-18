import Card from "./Card";

import { connect } from "react-redux";


function Sorteio(props) {  
   const { min, max } = props 
   const aleatory = parseInt(Math.random() * (max - min) + min)
    
   
   
    return(
        <Card title="Sorteio dos números">
            <div>

                <strong>{aleatory}</strong>
            </div>
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

export default connect(mapStateToProps)(Sorteio)
