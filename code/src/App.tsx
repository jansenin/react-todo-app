import React from "react";
import "./App.css";
import TodoSystem from "./components/TodoSystem";
import Menu from "./components/Menu";
import { HashRouter as Router, Route } from "react-router-dom";
import DisplayControl from "./components/DisplayControl";

const App: React.FC = () => {
    function todoList(todoListId: string): React.ReactElement {
        return (
            <Route
                path="/:todoListId"
                render={props => (
                    <DisplayControl
                        display={props.match.params.todoListId === todoListId}
                    >
                        <TodoSystem />
                    </DisplayControl>
                )}
            />
        );
    }

    return (
        <>
            <Router>
                <Menu />
                {todoList("1")}
                {todoList("2")}
                {todoList("3")}
            </Router>
        </>
    );
};

export default App;
