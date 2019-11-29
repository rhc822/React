import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
    render() {
        console.log(this.props)
        return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./location.jpg")} alt="location image" />
                </picture>
                <h3>Location: <span className="card-locationname">{this.props.location.address}</span></h3>
                <button
                    type="button"
                    onClick={() => {this.props.history.push(`/locations/${this.props.locations.id}/edit`)}}>
                        Edit
                </button>
                <Link to={`/locations/${this.props.location.id}`}>
                    <button>
                        Details
                    </button>
                </Link>
                <button
                    type="button"
                    onClick={() => this.props.deleteLocation(this.props.location.id)}>
                        Location destroyed, BOOM!
                </button>
            </div>
        </div>
        );
    }
}

export default LocationCard