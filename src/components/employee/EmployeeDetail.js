import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager'
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

state = {
    name: "",
    loadingStatus: true,
    }

componentDidMount(){
    EmployeeManager.get(this.props.employeeId)
        .then((employee) => {
            this.setState({
                name: employee.name,
                loadingStatus: false
            });
        });
}

handleDelete = () => {
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employees"))
}

render(){
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require('./employee.jpg')} alt="Employee" />
                </picture>
                    <h3>Name: {this.state.name}</h3>
                <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>You're Fired</button>
            </div>
        </div>
        );
    }
}


export default EmployeeDetail;