export default function Titulo(props) { 


    return (
       <div className="flex flex-col justify-center bg-gray-100">
            <h1 className="px-5 py-2  text-6xl">{props.children}</h1>
            <hr />
            <hr className="border-2 border-purple-400" />
       </div>
    )
}