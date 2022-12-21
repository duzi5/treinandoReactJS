

import Reducers from "./reducers/numeros";
import { createStore } from 'redux';









export default createStore({
    reducer:{ 
        numeros : Reducers 
    }
})