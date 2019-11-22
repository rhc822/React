import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
    render() {
        return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./location.jpg")} alt="location image" />
                </picture>
                <h3>Location: <span className="card-locationname">{this.props.location.address}</span></h3>
                <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Location destroyed, BOOM!</button>
                <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
            </div>
        </div>
        );
    }
}

export default LocationCard