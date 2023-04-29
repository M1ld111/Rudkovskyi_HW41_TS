import { createContext, useState, useContext, ReactNode } from "react";

interface TodoContextType {
  todoList: string[];
  numberOfTodos: () => number;
  addTodo: (newTodoItem: string) => void;
  removeTodo: (todoIndex: number) => void;
}

const TodoContext = createContext<TodoContextType>({
  todoList: [],
  numberOfTodos: () => 0,
  addTodo: (newTodoItem: string) => {},
  removeTodo: (todoIndex: number) => {},
});

const initialTodoListState = ["First todo"];

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState(initialTodoListState);

  const numberOfTodos = () => todoList.length

  const addTodo = (newTodoItem: string) => {
    setTodoList([...todoList, newTodoItem])
  }

  const removeTodo = (todoIndex: number): void => {
    const newList =  todoList.filter((_, index) => index !== todoIndex)
    setTodoList(newList)
  }

  const contextValue = {
    todoList,
    numberOfTodos,
    addTodo,
    removeTodo
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
