import React from "react";
import css from "./css/NavBarForm.module.css"
import NavBarChild from "./NavBarChild";

class NavBarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false:true
        }), () => console.log(this.state.isLoggedIn))
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {/* {
                    this.state.isLoggedIn ? 
                    <button onClick={() => this.handleClick()} >Login</button>
                    :
                    <form>
                        <label>Username:</label>
                        <input type={'text'} />

                        <label>Password:</label>
                        <input type={'password'} />

                        <button onClick={() => this.handleClick()}>Submit</button>
                    </form>
                } */}
                <NavBarChild 
                isLoggedIn={this.state.isLoggedIn}
                handleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default NavBarForm
