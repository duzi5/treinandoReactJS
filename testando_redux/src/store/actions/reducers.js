function NumerosReducer(state, action){
    switch(action.typename){
        case "ALTERA_MINIMO": 
            return{
                ...state,
                min : action.payload
            }
        case "ALTERA_MAXIMO":
            return{
                ...state,
                min : action.payload
            }    
    }
}

export default NumerosReducer