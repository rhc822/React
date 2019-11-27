import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css';

class EmployeeForm extends Component {
    state = {
        "name": "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.employeeName === "") {
            window.alert("Please enter an employee name");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                name: this.state.employeeName
            };

            EmployeeManager.post(employee)
            .then(() => this.props.history.push("/employees"));
        }
    };

    render(){
        return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text" required onChange={this.handleFieldChange} id="employeeName" placeholder="Employee Name">
                    </input>
                    <label htmlFor="employeeName">Employee Name
                    </label>
                </div>
                <div className="alignRight">
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewEmployee}>
                    Submit
                    </button>
                </div>
            </fieldset>
        </form>
        </>
        )
    }
}

export default EmployeeForm;