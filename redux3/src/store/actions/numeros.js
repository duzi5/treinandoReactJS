import Reducers from "../reducers/numeros"


import { createStore } from 'redux';



export function mudaNumeroMinimo (novoNumero) {
    return{
        type: 'ALTERA_NUM_MIN',
        payload: novoNumero
    }
}    
export function mudaNumeroMaximo (novoNumero) {
    return{
        type: 'ALTERA_NUM_MAX',
        payload: novoNumero
    }
}


