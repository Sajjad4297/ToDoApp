import { useState,useEffect } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';
import img from "../react.svg";
import  "../App.css";
export default function ToDoes() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
    useEffect(()=>{
        localStorage.setItem("todos" , JSON.stringify(todos))
    },[todos])
    function onInputKeyDown(event) {
        if (event.key == "Enter" && event.target.value != " " && event.target.value != "") {


            setTodos([
                ...todos,
                {
                    id: uuidv4(),
                    title: event.target.value,
                    checked: false
                }
            ])
            event.target.value = "";

        }
    }
    function deleteTodo(todo) {

        let newTodos = todos.filter((todoItem) => {

            return todoItem.id != todo.id
        })
        setTodos(newTodos)
    }


    function isChecked(todo) {
        let newTodos = todos.map((todoItem) => {
            if (todo.id == todoItem.id) {
                todoItem.checked = !todoItem.checked;
            }
            return todoItem;
        })
        setTodos(newTodos)
    }
    function editedTodo(todo, value) {
        let newTodos = todos.map((todoItem) => {

            if (todo.id == todoItem.id) {
                todoItem.title = value;
            }
            return todoItem;


        })
        setTodos(newTodos)
    }


    return (
        <div className="flex-col items-center justify-center h-screen ">
                        <img src={img} alt="react" />
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3 mt-20 bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?"
                        className="w-full px-2 py-3 border rounded outline-none border-grey-600"
                        onKeyDown={onInputKeyDown}
                    />
                </div>
                <ToDoList todos={todos} deleteTodo={deleteTodo} isChecked={isChecked} editedTodo={editedTodo} />
            </div>
        </div>

    )
}
