import React from "react";
import { ITodo } from "../Interfaces";
import TodoItem from "./TodoItem";
import { deleteTodo, onCheck } from "./TodoItem";
import NoTodos from "./NoTodos";

export type TodoListProps = {
    todos: ITodo[];
    deleteTodo: deleteTodo;
    onCheck: onCheck;
};

const TodoList: React.FC<TodoListProps> = props => {
    return (
        <div className="todo-list">
            {props.todos.length > 0 ? (
                props.todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        deleteTodo={props.deleteTodo}
                        onCheck={props.onCheck}
                    />
                ))
            ) : (
                <NoTodos />
            )}
        </div>
    );
};

export default TodoList;
