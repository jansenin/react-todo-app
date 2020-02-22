import React from "react";
import { ITodo } from "../Interfaces";

export type deleteTodo = (id: number) => void;

export type onCheck = (id: number) => void;

export type TodoItemProps = {
    todo: ITodo;
    deleteTodo: deleteTodo;
    onCheck: onCheck;
};

const TodoItem: React.FC<TodoItemProps> = props => {
    const styles = {
        pre: {
            border: "none",
            padding: "0",
            margin: "0",
            whiteSpace: "pre-wrap" as const
        }
    };
    return (
        <div
            className={`todo
         uk-card 
         uk-card-body 
         uk-card-default 
         uk-margin-top 
         uk-margin-right 
         uk-margin-bottom 
         uk-margin-left 
         uk-flex 
         uk-flex-between 
         uk-flex-middle`}
        >
            <div className="uk-flex uk-flex-between">
                <span>
                    <input
                        type="checkbox"
                        checked={props.todo.checked}
                        onChange={() => props.onCheck(props.todo.id)}
                        className="uk-checkbox"
                    ></input>
                </span>
                <pre
                    className="todo-title break-word uk-margin-left"
                    style={styles.pre}
                >
                    {props.todo.title}
                </pre>
            </div>
            <div className="uk-margin-left">
                <button
                    className="delete-button uk-icon-button uk-button-primary"
                    onClick={() => props.deleteTodo(props.todo.id)}
                >
                    <i uk-icon="icon: close"></i>
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
