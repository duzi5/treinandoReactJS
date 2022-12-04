import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  const [x, setx] = useState(0);
  const [name, setName] = useState("inicial")  
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício 01" />
      <div className="center">
        <span className="text">{x}</span>
        <div>
          <button className="btn" onClick={(_) => setx(x - 1)}>
            -
          </button>
          <button className="btn" onClick={(_) => setx(x + 1)}>
            +
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício 02" />
        <input type="text" className="input" 
        value={name}
        onChange={e => setName(e.target.value)} />
      <SectionTitle title="Exercício 03" />
    </div>
  );
};

export default UseState;
