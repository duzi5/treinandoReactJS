import "./teclado.css"


// eslint-disable-next-line import/no-anonymous-default-export
export default props => { 
    return(
        <div className="teclado">
            {props.children}
        </div>
    )
}