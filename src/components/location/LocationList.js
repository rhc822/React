import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationsManager from '../../modules/LocationsManager'

class LocationList extends Component {
    state = {
        locations: [],
    }

componentDidMount(){
    LocationsManager.getAll()
    .then((locationArray) => {
        this.setState({
            locations: locationArray
        })
    })
}

deleteLocation = id => {
    LocationsManager.delete(id)
        .then(() => {
            LocationsManager.getAll()
                .then((newLocations) => {
                    this.setState({
                        locations: newLocations
                        })
                    })
        })
}

render(){
    console.log(this.state.locations)
    return(
        <React.Fragment>
        <section className="section-content">
            <button
                type="button"
                className="btn"
                onClick={() => {this.props.history.push("/locations/new")}}>
                New Location
            </button>
        </section>
        <div className="container-cards">
            {this.state.locations.map(location =>
                <LocationCard
                    key={location.id}
                    location={location}
                    deleteLocation={this.deleteLocation}
                    {...this.props}
                />)}
        </div>
        </React.Fragment>
    )
}

}

export default LocationList