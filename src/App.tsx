import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import { Todo, List } from "./components/todos";
import CreateTodo from "./components/todos/create";
import EditTodo from "./components/todos/edit";
import { Contact, ContactList } from "./components/contact";
import CreateContact from "./components/contact/create-contact";
import EditContact from "./components/contact/edit-contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/todos" element={<Todo/>}>
            <Route path=":userId" element={<EditTodo/>}></Route>
            <Route path="list" element={<List/>}></Route>
            <Route path="create" element={<CreateTodo/>}></Route>
          </Route>
          <Route path="/contacts" element={<Contact/>}>
          <Route path=":contactId" element={<EditContact/>}></Route>
            <Route path="contact-list" element={<ContactList/>}></Route>
            <Route path="create" element={<CreateContact/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
