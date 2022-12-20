

import { combineReducers,legacy_createStore } from "redux"


const reducers = combineReducers({
    numeros: function(state, action){
        switch(action.typename){
            case "ALTERA MINIMO": 
                return{
                    min : 12
                }
        }
    }
})


function StoreConfig(){
    legacy_createStore(reducers)
}



export default StoreConfig