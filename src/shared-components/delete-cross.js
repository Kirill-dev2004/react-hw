import "./delete-cross.css"

export default function AppDelete( {cb} ){
    return <div className="delete" onClick={cb}>X</div>
}