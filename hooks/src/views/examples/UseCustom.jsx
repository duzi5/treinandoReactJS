import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useCounter, initialValue } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const UseRef = (props) => {
  const [count, inc, dec] = useCounter();
  const url = "http://files.cod3r.com.br/curso-react/estados.json";

  const response = useFetch(url, "get");

  function showStates(states) {
    return states.map((state) => <div key={state.nome}><li>{state.nome}</li> <li>{state.sigla}</li></div>);
  }

  return (
    <div className="center">
      <ul>{response.data ? showStates(response.data) : "nao"}</ul>
    </div>
  );
};

export default UseRef;
