import React, { Component } from 'react';
import { Link } from "react-router-dom"

class EmployeeCard extends Component {
    render() {
        return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./employee.jpg")} alt="pet shop employee" />
                </picture>
                <h3>Employee Name: <span className="card-employeename">{this.props.employee.name}</span></h3>
                <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
                <button type="button" onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
            </div>
        </div>

        );
    }
}

export default EmployeeCard