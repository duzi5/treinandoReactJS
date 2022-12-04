import React, {useState, useEffect, useRef} from 'react'
import PageTitle from '../../components/layout/PageTitle'



const UseRef = (props) => {
    
    const [valor1, setValor1] = useState("") 
    const count = useRef(0)
    count.current = count.current++
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
     
            <div className="center">
                <span> valor:</span>
                <span className="text">{count.current}</span>
                <span className="text red">{valor1}</span>
                <span className="text">
                </span>
                <input type="text" name="" id="" className='input' onChange={e => setValor1(e.target.value)}/>
            
            </div>
     
     
     
        </div>
    )
}

export default UseRef
