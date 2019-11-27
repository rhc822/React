import React, { Component } from 'react';
import OwnersManager from '../../modules/OwnersManager';
import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        name: "",
        phone: "",
        loadingStatus: false,
    };

/* This function requires the state info above have the same keys as the IDs in the inputs below (in the render() function) */

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.phone === "") {
            window.alert("Please enter owner details");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.name,
                phone: this.state.phone,
            };

            OwnersManager.post(owner)
            .then(() => this.props.history.push("/owners"));
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
                        id="name"
                        placeholder="Owner Name">
                    </input>
                    <label htmlFor="name">Name
                    </label>
                    <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="phone"
                        placeholder="Owner Phone number">
                    </input>
                    <label htmlFor="phone">Phone
                    </label>
                </div>
                <div className="alignRight">
                    <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}>
                            Submit
                    </button>
                </div>
            </fieldset>
        </form>
        </React.Fragment>
        )
    }
}

export default OwnerForm