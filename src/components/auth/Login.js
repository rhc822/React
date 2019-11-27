import React, { Component } from "react"

/* This component handles user login. An initial email/password value is set in State to empty. The component is then rendered to DOM. As the user types in either field, the handelFieldChange function runs populating and updating the appropriate email and password state values. When the user clicks the submit button, handleLogin function runs, which updates browser's localStorage. */

class Login extends Component {

// Set initial state
state = {
    email: "",
    password: ""
}

// This function sets the state to the value the user entered in to the input fields.

handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

// This function sets up local storage to the email/password and then sends user to animals screen.

handleLogin = (e) => {
    e.preventDefault()
/*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    localStorage.setItem(
        "credentials",
        JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    )
    this.props.history.push("/")
}

render() {
    return (
        <form onSubmit={this.handleLogin}>
            <fieldset>
                <h3>Please sign in</h3>
                <div className="formgrid">
                    <input
                        onChange={this.handleFieldChange}
                        type="email"
                        placeholder="Email address"
                        required="" autoFocus="">
                    </input>
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="password"
                        id="password"
                        placeholder="Password"
                        required="">
                    </input>
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <button type="submit">Sign in </button>
            </fieldset>
        </form>
    )
}

}

export default Login