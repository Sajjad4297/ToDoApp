import ToDoListItems from "./ToDoListItems";

export default function ToDoList({todos,deleteTodo,isChecked,editedTodo}) {
    return(
        <ul className="list-reset">
            {todos.map( (todo,index) =>< ToDoListItems key={index} todo={todo} deleteTodo={deleteTodo} isChecked={isChecked} editedTodo={editedTodo} /> ) }
    </ul>

    )
}
