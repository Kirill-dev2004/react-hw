import { MenuI } from "./type";
import { Link } from "react-router-dom";
import "../styles/menu-styles.css"
export default function Menu() {
  const menu: MenuI[] = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "TODOS",
      link: "/todos/list",
    },
    {
      title : "CONTACT",
      link: "/contacts/contact-list"
    }
  ];
  return (
    <div className="menu">
      {menu.map((e, i) => (
        <div key={i}>
          <Link to={e.link}>{e.title}</Link>
        </div>
      ))}
    </div>
  );
}
