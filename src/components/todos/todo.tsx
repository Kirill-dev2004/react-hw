import "../styles/create-btn.css"
import { useNavigate, Outlet } from "react-router-dom";
export default function Todo() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="create-btn" onClick={() => navigate("create")}>Create Todo</button>

      <Outlet />
    </div>
  );
}
