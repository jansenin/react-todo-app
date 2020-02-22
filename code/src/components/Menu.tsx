import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = props => {
    return (
        <div className="p20px uk-flex uk-flex-around">
            <Link to="/1" className="uk-button-primary uk-button">
                First list
            </Link>
            <Link to="/2" className="uk-button-primary uk-button">
                Second list
            </Link>
            <Link to="/3" className="uk-button-primary uk-button">
                Third list
            </Link>
        </div>
    );
};

export default Menu;
