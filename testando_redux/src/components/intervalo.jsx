import { alterarMinimo, alterarMaximo } from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card>
      <div>
        <p>Mínimo: </p>
        <input
          type="number"
          onChange={(e) => props.alterarminimo(+e.target.value)}
          value={min}
        />
      </div>
      <div>
        <p>Máximo: </p>
        <input
          type="number"
          onChange={(e) => props.alterarmaximo(+e.target.value)}
          value={max}
        />
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProp(dispatch) {
  function alterarminimo(novoNumero) {
    const action = alterarMinimo(novoNumero);
    dispatch(action);
  }
  function alterarmaximo(novoNumero) {
    const action = alterarMaximo(novoNumero);
    dispatch(action);
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);
