import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager'
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

state = {
    name: ""
    }

componentDidMount(){
    EmployeeManager.get(this.props.employeeId)
        .then((employee) => {
            this.setState({
                name: employee.name
            });
        });
}

render(){
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require('./employee.jpg')} alt="Employee" />
                </picture>
                    <h3>Name: {this.state.name}</h3>
            </div>
        </div>
        );
    }
}


export default EmployeeDetail;