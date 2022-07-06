import React from "react";
import AppButton from "../../shared-components/button";
import TodoCreate from "./todo-create/todo-create";
import TodosList from "./todos-list/todo-list";
import './todos-style.css'

const todos = [
    {
        id: 1,
        title: 'Make',
        body: 'HW',
        isComplete: false,
    },
    {
        id: 2,
        title: 'Make',
        body: 'Breakfast',
        isComplete: false,
    },
    {
        id: 3,
        title: 'Listen',
        body: 'Music',
        isComplete: false,
    },
]
export default class TodosComponents extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentTodo: null,
            todos,
            isEdit: false,
            isCreate: false,
        };
        this.onTodoCreate = this.onTodoCreate.bind(this);
        this.onTodoDelete = this.onTodoDelete.bind(this);
        this.onTodoEdit = this.onTodoEdit.bind(this);
        this.onTodoBuild = this.onTodoBuild.bind(this);
        this.todoComplete = this.todoComplete.bind(this);
    }

    render(){
        return (
        <>
            <div className="todos-container">
                <AppButton cb={this.onTodoCreate}>Create</AppButton>
                {this.renderTodo()}
            </div>
        </>
        );
    }

    renderTodo(){
        if(!this.state.isCreate && !this.state.isEdit){
            return  <TodosList todos={this.state.todos} onDelete={this.onTodoDelete} edit={this.onTodoEdit} onComplete={this.todoComplete}></TodosList>
        }

        if(this.state.isCreate || this.state.isEdit){
            return <TodoCreate cb={this.onTodoBuild} todo={this.state.currentTodo ? this.state.currentTodo : {title:"", body:""}} nameButton={this.state.currentTodo ?  'Edit Todo' : 'Create Todo'}></TodoCreate>
        }
    }

    onTodoCreate(){
       this.setState({...this.state, isCreate: true})
    }

    onTodoBuild(todo){
        if(!todo.id){
            this.setState({...this.state, todos:[...this.state.todos, {...todo, id: Date.now()}], isCreate: false})
        }else{
            this.setState({...this.state, todos:[...this.state.todos.map(t => t.id === todo.id ? todo : t)], isCreate: false, isEdit:false, currentTodo: null})
        }
    }

    onTodoDelete(id){
        this.setState({...this.state, todos: this.state.todos.filter(t => t.id !== id)})
    }

    onTodoEdit(todo){
        this.setState({...this.state, currentTodo: todo, isEdit:true})
    }

    todoComplete(id){
        this.setState({...this.state, todos: this.state.todos.map(t => {
            if(t.id === id){
                return {...t, isComplete: true}
            }else{
                return t;
            }
        })})
    }


}