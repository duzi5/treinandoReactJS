import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Cliente from "../../core/Cliente"
import { Component } from 'react';


export default function Home() {
  
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 66, '2'),
    new Cliente('Joana', 12, '3'),
    new Cliente('Giovanna', 14, '4'),
    new Cliente('Laura', 99, '5'),
    new Cliente('Ana', 34, '6'),
    new Cliente('Bia', 66, '7'),
    new Cliente('Joana', 12, '8'),
    new Cliente('Giovanna', 14, '9'),
    new Cliente('Laura', 99, '10'),
    new Cliente('Ana', 34, '11'),
    new Cliente('Bia', 66, '12'),
    new Cliente('Joana', 12, '13'),
    new Cliente('Giovanna', 14, '14'),
    new Cliente('Laura', 99, '15'),
    new Cliente('Ana', 34, '16'),
    new Cliente('Bia', 66, '17'),
    new Cliente('Joana', 12, '18'),
    new Cliente('Giovanna', 14, '19'),
    new Cliente('Laura', 99, '20')
  ]
  
  
  
  
  
  return (
    <div className="flex items-center h-screen justify-center bg-gradient-to-r from-blue-900 to-indigo-700 ">
      <Layout titulo="Cadastro simples">
            <Tabela clientes = {clientes} />
      </Layout>
    </div>
  );
}
