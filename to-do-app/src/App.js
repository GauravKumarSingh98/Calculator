// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessages from "./components/WelcomeMessages";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <div className="bg-[#cbd5e1] h-screen flex justify-center">
        <div className="w-[70%] rounded bg-[#a7f3d0]">
          <AppName />
          <div className="mt-4">
            <AddToDo onNewItems={handleNewItem} />
            {todoItems.length === 0 && (
              <WelcomeMessages todoItems={todoItems} />
            )}
            <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
