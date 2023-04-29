import { useState } from "react"
import { useTodoContext } from "../providers/TodoProvider"

const TodoForm = () => {
    const { numberOfTodos, addTodo } = useTodoContext()
    const [todoItem, setTodoItem] = useState("")

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!todoItem) {
            return
        }

        addTodo(todoItem);

        setTodoItem("")
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h2>Todo's remain to do: {numberOfTodos()}</h2>
            <input type="text" value={todoItem} onChange={e => setTodoItem(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm