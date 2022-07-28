import { useNavigate, Outlet } from "react-router-dom";
import "../styles/create-btn.css"

export default function Contact() {
    const navigate = useNavigate()
    return (
        <div>
            <button className="create-btn" onClick={() => navigate('create')}>Create Contact</button>
            <Outlet/>
        </div>
    )
}