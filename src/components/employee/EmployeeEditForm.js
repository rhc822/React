import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeForm.css"

class EmployeeEditForm extends Component {
    state = {
        name: "",
        loadingStatus: true,
    };

handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

updateExistingEmployee = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedEmployee = {
        id: this.props.match.params.employeeId,
        name: this.state.name
    };

    EmployeeManager.update(editedEmployee)
    .then(() => this.props.history.push("/employees"))
}

componentDidMount() {
    EmployeeManager.get(this.props.match.params.employeeId)
        .then(employee => {
            this.setState({
                name: employee.name,
                loadingStatus: false,
            });
        });
}

render() {
    return(
        <React.Fragment>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            value={this.state.name}>
                        </input>
                        <label htmlFor="name">Employee Name</label>
                    </div>

                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={this.state.loadingStatus}
                            onClick={this.updateExistingEmployee}
                            className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </React.Fragment>
    );
}


}

export default EmployeeEditForm