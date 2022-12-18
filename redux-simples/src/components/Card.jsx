import "./card.css"



export default props => {
    

    return(
        <div className="Card">
            <div className="Header">
                <span>{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}