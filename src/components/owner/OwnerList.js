import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnersManager from '../../modules/OwnersManager'

class OwnersList extends Component {
    state = {
        owners: [],
    }

componentDidMount(){
    OwnersManager.getAll()
    .then((owners) => {
        this.setState({
            owners: owners
        })
    })
}

deleteOwner = id => {
    OwnersManager.delete(id)
        .then(() => {
            OwnersManager.getAll()
                .then((newOwners) => {
                    this.setState({
                        owners: newOwners
                    })
                })
        })
}

render(){
    return(
        <React.Fragment>
        <section className="section-content">
            <button
                type="button"
                className="btn"
                onClick={() => {this.props.history.push("/owners/new")}}>
                Create Owner
            </button>
        </section>
        <div className="container-cards">
            {this.state.owners.map(owner =>
                <OwnerCard
                    key={owner.id}
                    owner={owner}
                    deleteOwner={this.deleteOwner}
                />)}
        </div>
        </React.Fragment>
        )
    }
}

export default OwnersList