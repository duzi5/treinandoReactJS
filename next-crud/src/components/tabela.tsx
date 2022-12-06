import Cliente from "../../core/Cliente";

interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?:(cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
  function renderizarCabecalho() {
    return (
      <thead> 
       
          <th>id</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Acoes</th>
       
      </thead>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id}>
          <td >{cliente.id}</td>
          <td className="p-5">{cliente.nome}</td>
          <td>{cliente.idade}</td>
          <td>{cliente.acoes}</td>
        </tr>
      );
    });
  }

  return (
    <>
      <table className="rounded-xl overflow-hidden" >{renderizarCabecalho()}</table>
      <tbody className="">{renderizarDados()}</tbody>
    </>
  );
}
