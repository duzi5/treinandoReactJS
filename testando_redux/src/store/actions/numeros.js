
export function alterarMinimo(novoNumero){
    return {
        type: 'ALTERA_MINIMO',
        payload: novoNumero
    }
}
export function alterarMaximo(novoNumero){
    return {
        type: 'ALTERA_MAXIMO',
        payload: novoNumero
    }
}

