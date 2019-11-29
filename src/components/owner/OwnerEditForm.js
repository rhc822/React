import React, { Component } from "react"
import OwnersManager from "../../modules/OwnersManager"
import "./OwnerForm.css"

class OwnerEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      phone: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedOwner = {
        id: this.props.match.params.ownerId,
        name: this.state.name,
        phone: this.state.phone
      };

      OwnersManager.update(editedOwner)
      .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
      OwnersManager.get(this.props.match.params.ownerId)
      .then(owner => {
          this.setState({
            name: owner.name,
            phone: owner.phone,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="name">Owner name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="phone"
                value={this.state.phone}
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingOwner}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default OwnerEditForm