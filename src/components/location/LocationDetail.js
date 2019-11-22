import React, { Component } from 'react';
import LocationsManager from '../../modules/LocationsManager';
import './LocationDetail.css'

/* This component shows the details of an individual location. */

class LocationDetail extends Component {

    state = {
        address: "",
    }

/* compoenentDidMount gets an individual location (via ID) then sets the state to that location. */

    componentDidMount(){
        LocationsManager.get(this.props.locationID)
            .then((location) => {
                this.setState({
                    address: location.address
                })
            })
    }

/* This section puts the info on the DOM */

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./location.jpg')} alt="location" />
                    </picture>
                        <h3>Location:{this.state.address}</h3>
                </div>
            </div>
        )
    }

}

export default LocationDetail;