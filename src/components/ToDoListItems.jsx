import { useState } from "react";
import DeleteIcon from "./Images/DeleteIcon";
import EditIcon from "./Images/EditIcon";

export default function ToDoListItems({ todo, deleteTodo, isChecked, editedTodo }) {

    var [editMode, setEditMode] = useState(true);


    function editHandealer(event) {
        if (event.key == "Enter") {
            if (event.target.value == "" || event.target.value == " ") {
                deleteTodo(todo);
                setEditMode(true)
            } else {
                editedTodo(todo,event.target.value)
                setEditMode(true)
            }
        }

    }

    return (
        <li className="relative flex items-center justify-between px-2 py-6 border-b">


            {
                editMode ?

                    <div className="flex items-center">
                        <div>
                            <input type="checkbox" checked={todo?.checked} onChange={() => { isChecked(todo) }} className="" />
                            <p className={`inline-block mt-1 ml-2 text-gray-600 ${todo?.checked ? 'line-through' : ' '}`}> {todo?.title} </p>
                        </div>
                        <button type="button" className="absolute right-0 flex items-center space-x-1">
                            <EditIcon onclick={() => { setEditMode(false) }} />
                            <DeleteIcon onclick={() => { deleteTodo(todo) }} />
                        </button>

                    </div>


                    :
                    (<div className="flex w-full items-center">
                        <input defaultValue={todo?.title} onKeyDown={editHandealer} type="text" className="w-full px-3 py-1 border-gray-600 border rounded" />
                        <DeleteIcon className={"ml-2"} onclick2={() => { setEditMode(true) }} />
                    </div>)
            }



















        </li>

    )
}
