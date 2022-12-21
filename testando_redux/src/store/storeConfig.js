
import NumerosReducer from "./actions/reducers"
import { combineReducers,legacy_createStore } from "redux"


const reducers = combineReducers({
    numeros: NumerosReducer
})


function StoreConfig(){
    legacy_createStore(reducers)
}



export default StoreConfig