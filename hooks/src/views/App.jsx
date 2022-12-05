import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'
import Store, {AppContext} from "../data/Store"
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = props => {

    return (    
            <Store>            
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </Store>
    )
}

export default App