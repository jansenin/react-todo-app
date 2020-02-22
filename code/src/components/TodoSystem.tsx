import React, { useState } from "react";
import TodoList from "./TodoList";
import { ITodo } from "../Interfaces";
import InputField, { onInputChange, onInputKeyDown } from "./InputField";
import { deleteTodo, onCheck } from "./TodoItem";

let id = 0;

const TodoSystem: React.FC = () => {
    const [todos, changeTodos] = useState<ITodo[]>([]);

    const [inputValue, changeInputValue] = useState<string>("");

    const onInputChange: onInputChange = e => {
        changeInputValue(e.target.value);
    };

    const onInputKeyDown: onInputKeyDown = e => {
        if (e.key === "Enter" && inputValue.trim()) {
            changeTodos([
                ...todos,
                { title: inputValue, id: id++, checked: false }
            ]);
            changeInputValue("");
        }
    };

    const deleteTodo: deleteTodo = id => {
        changeTodos(todos.filter(todo => todo.id !== id));
    };

    const onCheck: onCheck = id => {
        changeTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.checked = !todo.checked;
                }
                return todo;
            })
        );
    };

    return (
        <>
            <InputField
                value={inputValue}
                onChange={onInputChange}
                onKeyDown={onInputKeyDown}
            />
            <TodoList todos={todos} deleteTodo={deleteTodo} onCheck={onCheck} />
        </>
    );
};

export default TodoSystem;
