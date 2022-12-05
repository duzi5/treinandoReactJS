import React from "react";
import { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: "Antonio" } };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      {state.user ? (
        <span className="text">{state.user.name}</span>
      ) : (
        <span className="text">Usuário não está logado</span>
      )}

      <h1>{state.number}</h1>
      <div>
        <button className="btn" onClick={() => dispatch({ type: "numberAdd2" })}>
          +2
        </button>
        <button onClick={() => dispatch({ type: "login" })} className="btn">
          login
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
