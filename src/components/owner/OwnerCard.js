import React, { Component } from 'react';

class OwnerCard extends Component {
    render() {
        return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./owner.jpeg")} alt="owner image" />
                </picture>
                <h3>Owner name: <span className="card-ownername">{this.props.owner.name}</span></h3>
                <p>phone number: {this.props.owner.phone}</p>
                <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Bye Bye Bye</button>
            </div>
        </div>

        );
    }
}

export default OwnerCard