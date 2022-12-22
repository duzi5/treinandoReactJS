import {createStore, combineReducers} from 'redux'
import numerosReducers from "./reducers/numeros";





const reducers = combineReducers({
    numeros: numerosReducers
})

function StoreConfig(){
    return createStore(reducers)
}



export default StoreConfig
