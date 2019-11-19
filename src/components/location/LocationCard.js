import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./location.jpg")} alt="location image" />
                </picture>
                <h3>Location: <span className="card-locationname">Timbuktu</span></h3>
            </div>
        </div>
        );
    }
}

export default LocationCard