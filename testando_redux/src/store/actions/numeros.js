
export function alterarMinimo(novoNumero){
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}
export function alterarMaximo(novoNumero){
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}

