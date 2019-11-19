import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./employee.jpg")} alt="pet shop employee" />
                </picture>
                <h3>Employee Name: <span className="card-employeename">Happy employee</span></h3>
            </div>
      </div>

        );
    }
}

export default EmployeeCard