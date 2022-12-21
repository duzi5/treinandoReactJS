export default function Reducers(action, state){ 
    switch(action.typename){
        case "ALTERNA_NUM_MIN":
            return {
                ...state.num,
                min: action.payload
            }
        case "ALTERNA_NUM_MAX":
            return {
                ...state.num,
                max: action.payload
            }
        default: 
            return state
        }






}