import React, { Component } from 'react';

class OwnerCard extends Component {
    render() {
        return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./owner.jpeg")} alt="owner image" />
                </picture>
                <h3>Owner name: <span className="card-ownername">Jane</span></h3>
            </div>
        </div>

        );
    }
}

export default OwnerCard