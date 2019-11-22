import React, { Component } from 'react';
import EmployeeManager from '../../modules/OwnersManager'
import './OwnerDetail.css'
import OwnersManager from '../../modules/OwnersManager';

class OwnerDetail extends Component {

state = {
    name: "",
    phone: "",
}

componentDidMount(){
    OwnersManager.get(this.props.ownerId)
        .then((owner) => {
            this.setState({
                name: owner.name,
                phone: owner.phone
                })
            })
        }

render() {
    console.log(this.props.ownerId)
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                   <img src={require('./owner.jpeg')} alt="Owner" />
                </picture>
                <h3>Name: {this.state.name}</h3>
                <p>Phone: {this.state.phone}</p>
            </div>
        </div>
        );
    }

}

export default OwnerDetail;