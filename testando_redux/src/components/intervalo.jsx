import { alterarMinimo } from '../store/actions/numeros';

function Intervalo(props){ 
    return(
        <Card>
            <div>
                <p>Mínimo: </p>
                <input type="number" />
            </div>
            <div>
                <p>Máximo: </p>
                <input type="number" />
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapActionCreatorsToProp(dispatch){
    alterarminimo(novoNumero){
        const action = alterarMinimo(novoNumero)
        dispatch(action)
    }
}

export default connect(mapStateToProps, mapActionCreatorsToProp)(Intervalo)
