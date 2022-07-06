import './cross.css'


export default function AppDelete({children, cb}){
    return <div className="delete" onClick={cb}>{children}</div>
}