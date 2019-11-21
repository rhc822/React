import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./location.jpg")} alt="location image" />
                </picture>
                <h3>Location: <span className="card-locationname">{this.props.location.address}</span></h3>
                <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Location destroyed with the press of a button (what power I have, Mwa ha ha)</button>
            </div>
        </div>
        );
    }
}

export default LocationCard