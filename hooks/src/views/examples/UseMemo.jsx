import React, { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

const UseMemo = (props) => {
  const futuro = Date.now() + 2000;

  function sum(a, b) {
    while (Date.now() < futuro) {}
    return parseInt(a) + parseInt(b);
  }

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const result = useMemo(() => sum(n1 + n2), [n1, n2]);

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memorizado!" />
      <div className="centro">
        <input
          type="number"
          className="number"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
        />
        <input
          type="number"
          className="number"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
        />
        <input
          type="number"
          className="number"
          value={n3}
          onChange={(e) => setN3(e.target.value)}
        />
        <h1>{result}</h1>
      </div>
    </div>
  );
};

export default UseMemo;
