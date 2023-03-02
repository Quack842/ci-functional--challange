import React from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "Log In",
        }
    }

    handleClick() {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome Back, user" : "Hello, guest!",
            buttonText: prevState.buttonText == "Log In" ? "Log Out" : "Log In",
        }))
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple
