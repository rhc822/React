import React, { Component } from 'react';
import LocationsManager from '../../modules/LocationsManager';
import './LocationDetail.css'

/* This component shows the details of an individual location.

loadingStatus works this way: First it's set to true (meaning it will wait until render completes to enable being able to do anything. Then, the page will render. Then, in componentDidMount, it's set to false, so now you can enable things. )

*/

class LocationDetail extends Component {

    state = {
        address: "",
        loadingStatus: true,
    }

/* componentDidMount gets an individual location (via ID) then sets the state to that location. */

    componentDidMount(){
        LocationsManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    address: location.address,
                    loadingStatus: false
                })
            })
    }

/* This function runs when the delete button is pushed and deletes this particular item. The long .push thing navigates the browser to the location page. */

handleDelete = () => {
    this.setState({loadingStatus: true})
    LocationsManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}

/* This section puts the info on the DOM */
    render() {
        console.log(this.props.history)
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./location.jpg')} alt="location" />
                    </picture>
                        <h3>Location:{this.state.address}</h3>
                        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Blowup location</button>
                </div>
            </div>
        )
    }

}

export default LocationDetail;