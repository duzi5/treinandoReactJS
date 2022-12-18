import { createStore, combineReducers } from 'redux'
import numerosReducer from "./reducers/numerosReducer"


const reducers = combineReducers({
    numeros: numerosReducer
    


})




function StoreConfig(){
    createStore(reducers)
}

export default StoreConfig
  