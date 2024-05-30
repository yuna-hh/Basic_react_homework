import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const formHandler = (event) => {
    event.preventDefault();
    if (!todoInput.trim()) {
      return alert("값을 입력하세요");
    }

    const newTodo = {
      id: uuidv4(),
      content: todoInput,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTodoInput("");
  };
  console.log(todos);

  const inputHandler = (event) => {
    setTodoInput(event.target.value);
    // console.log(todoInput);
  };

  const deleteTodoBtn = (newTodoId) => {
    const filteredItems = todos.filter(
      (clickeditem) => newTodoId !== clickeditem.id
    );
    return setTodos(filteredItems);
  };

  const toggleTodoBtn = (newTodoId) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === newTodoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      })
    );
  };
  return (
    <>
      <form className="form_container" onSubmit={formHandler}>
        <input
          onChange={inputHandler}
          value={todoInput}
          placeholder="오늘의 할 일은?"
          type="text"
        />
        <button>추가</button>
      </form>
      <ul>
        {todos.map((newTodo) => {
          return (
            <li
              key={newTodo.id}
              style={{
                textDecoration: newTodo.completed ? "line-through" : "none",
              }}
            >
              {newTodo.content}
              <button
                onClick={() => {
                  toggleTodoBtn(newTodo.id);
                }}
              >
                {newTodo.completed ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  deleteTodoBtn(newTodo.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
