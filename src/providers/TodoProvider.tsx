import { createContext, useState, useContext, ReactNode } from "react";

interface TodoContextType {
  todoList: string[];
  numberOfTodos: () => number;
  addTodo: (newTodoItem: string) => void;
  removeTodo: (todoIndex: number) => void;
  startEditTodo: (todoIndex: number) => void;
  endEditTodo: (updatedTodo: string) => void;
}

const TodoContext = createContext<TodoContextType>({
  todoList: [],
  numberOfTodos: () => 0,
  addTodo: (newTodoItem: string) => {},
  removeTodo: (todoIndex: number) => {},
  startEditTodo: (todoIndex: number) => {},
  endEditTodo: (updatedTodo: string) => {},
});

const initialTodoListState = ["First todo"];

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState(initialTodoListState);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const numberOfTodos = () => todoList.length;

  const addTodo = (newTodoItem: string) => {
    setTodoList([...todoList, newTodoItem]);
  };

  const removeTodo = (todoIndex: number): void => {
    const newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);
  };

  const startEditTodo = (index: number) => {
    setEditingIndex(index);
  };

  const endEditTodo = (updatedTodo: string) => {
    if (editingIndex === null) {
      return;
    }
    const newTodoList = [...todoList];
    newTodoList[editingIndex] = updatedTodo;
    setTodoList(newTodoList);
    setEditingIndex(null);
  };

  const contextValue = {
    todoList,
    numberOfTodos,
    addTodo,
    removeTodo,
    startEditTodo,
    endEditTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
