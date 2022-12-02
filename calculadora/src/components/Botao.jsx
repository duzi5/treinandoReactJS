/* eslint-disable import/no-anonymous-default-export */
import "./botao.css";

// eslint-disable-next-line import/no-anonymous-default-export



export default (props) => {
  const grid = { gridArea: props.area };

  return (
    <div className="botao" style={grid} onClick = {props.evento}>
      {props.children}
    </div>
  );
};
