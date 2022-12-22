import Card from "./Card";
import {
  mudaNumeroMinimo,
  mudaNumeroMaximo,
} from "../store/actions/numeros.js";

import { connect } from "react-redux";

function Inputs(props) {
  const { min, max } = props;

  return (
    <Card>
      <input
        type="number"
        value={min}
        placeholder="min"
        onChange={(e) => {
          props.altera_min(+e.target.value);
        }}
      />
      <input
        type="number"
        value={max}
        placeholder="max"
        onChange={(e) => {
          props.altera_max(+e.target.value);
        }}
      />
    </Card>
  );
}

function mapDispatchToProps(dispatch) {
    function altera_min(novoNumero) {
      const action = mudaNumeroMinimo(novoNumero);
      dispatch(action);
    }
    function altera_max(novoNumero) {
      const action = mudaNumeroMaximo(novoNumero);
      dispatch(action);
    }
  }

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
