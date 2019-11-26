import React, { Component } from 'react';
import LocationManager from '../../modules/LocationsManager';
import './LocationForm.css'

class LocationForm extends Component {
    state = {
        address: "",
        loadingStatus: false,
    };

// This function gets the ID of the input field from evt.target.id and then gets the value that user has typed into the field (evt.target.value)

handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
}

// When the user clicks the submit button, this function runs. IF they try to click the submit button without entering any text they get a warning, ELSE they the POST to LocationManager is run and the user is sent back to the locations list.

constructNewLocation = evt => {
    evt.preventDefault();
    if (this.state.address === "") {
        window.alert("Please input a location");
    } else {
        this.setState({ loadingStatus: true });
        const location = {
            address: this.state.address
        };
        LocationManager.post(location)
        .then(() => this.props.history.push("/locations"))
    }
};

render(){
    return(
        <React.Fragment>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="address">
                    </input>
                    <label
                        htmlFor="address">
                        Add Address
                    </label>
                </div>
                <div className="alignRight">
                    <button
                        type ="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewLocation}>
                            Submit
                    </button>
                </div>
            </fieldset>
        </form>
        </React.Fragment>
        )

    }

}

export default LocationForm