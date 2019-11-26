import React, { Component } from 'react';
import OwnersManager from '../../modules/OwnersManager';
import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        name: "",
        phone: "",
        loadingStatus: false,
    };

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
                        id="ownerName"
                        placeholder="Owner Name">
                    </input>
                    <label htmlFor="ownerName">Name
                    </label>
                    <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="ownerPhone"
                        placeholder="Owner Phone number">
                    </input>
                    <label htmlFor="ownerPhone">Phone
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