import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/Calculator";
import Display from "./components/Display";
import Teclado from "./components/teclado";
import Botao from "./components/Botao";

function App() {
  const [primeiro, setPrimeiro] = useState("0");
  const [segundo, setSegundo] = useState("0");
  const [virgulado, setVirgulado] = useState(false);
  const [davez, setDavez] = useState("primeiro");
  const [operador, setOperador] = useState();
  const [resultado, setResultado] = useState(0);
  const [display, setDisplay] = useState("0");

  function visualizar(){
    console.log(davez)
    console.log(resultado)
    console.log(display)
    console.log(primeiro) 
    console.log(segundo)
    
  } 
  
  function isFirst (vari){ 
    if (vari.length > 1){
      return false
    }else{
      return true
    }
  }
  
  
  
  
  
  const insereDigito = (n) => {
    
    
    
    if (primeiro != "0" && segundo != "0") {
      setDisplay(primeiro.length > 1 ? primeiro + n :  n)
      if(isFirst(primeiro)){
        setDisplay(n)
      }
      console.log(n.toString)
      setPrimeiro(primeiro + "" + n);
   
    } else {
      setDisplay(segundo.length > 1 ? segundo + n :  n)
      if(isFirst(segundo)){
        setDisplay(n)
      }
      console.log(n.toString)
      setSegundo(segundo + n);
      
    }
  };

  const inserePonto = () => {
    if (!virgulado) {
      setPrimeiro(primeiro + ".");
      setVirgulado(true);
    } else {
      return "Já possuímos uma virgula aqui";
    }
  };

  const somar = () =>{ 
    if (davez == "primeiro"){
      setSegundo(0)
      setDisplay(segundo + "")
      setDavez("segundo")
      somar()
    }else{
      setResultado(eval(primeiro + segundo))
      setDisplay(resultado)
      setPrimeiro(resultado)
      setDavez("segundo")
    }

  }
  

  const igual = () => {
    if (primeiro != "0" && segundo != "0") {
      switch (operador) {
        case "multiplicacao":
          setResultado(eval(primeiro * segundo));
          break
        case "subtracao":
          setResultado(eval(primeiro - segundo));
          break
        case "dividir":
          setResultado(eval(primeiro / segundo));
          break
        case "soma":
          setResultado(eval(primeiro + segundo));
          break
      }
      setDisplay(resultado)        
    }
  };

  const ac = () => {
    setDavez("primeiro");
    setPrimeiro("0");
    setSegundo("0");
    setResultado("0");
    setDisplay("0");

    
    
    
  };
  




  return (
    <div className="App">
      <Calculator>
        <Display>
          <h1>{display}</h1>
        </Display>
        <Teclado>
          <Botao area="zero" evento={() => insereDigito("0")}>
            0
          </Botao>
          <Botao area="um" evento={() => insereDigito("1")}>
            1
          </Botao>
          <Botao area="dois" evento={() => insereDigito("2")}>
            2
          </Botao>
          <Botao area="tres" evento={() => insereDigito("3")}>
            3
          </Botao>
          <Botao area="quatro" evento={() => insereDigito("4")}>
            4
          </Botao>
          <Botao area="cinco" evento={() => insereDigito("5")}>
            5
          </Botao>
          <Botao area="seis" evento={() => insereDigito("6")}>
            6
          </Botao>
          <Botao area="sete" evento={() => insereDigito("7")}>
            7
          </Botao>
          <Botao area="oito" evento={() => insereDigito("8")}>
            8
          </Botao>
          <Botao area="nove" evento={() => insereDigito("9")}>
            9
          </Botao>
          <Botao area="igual" evento={() => igual()}>
            =
          </Botao>
          <Botao area="mais" evento={() => somar()}>
            +
          </Botao>
          <Botao area="menos" evento={() => subtrair()}>
            -
          </Botao>
          <Botao area="divisao" evento={() => dividir()}>
            /
          </Botao>
          <Botao area="vezes" evento={() => multiplicacao()}>
            *
          </Botao>
          <Botao area="ac" evento={() => ac()}>
            AC
          </Botao>
          <Botao area="virgula" evento={() => inserePonto()}>
            ,
          </Botao>
          <Botao area="igual" evento={() => igual()}>
            =
          </Botao>
        </Teclado>
      </Calculator>
    </div>
  );
}

export default App;
