import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationsManager from '../../modules/LocationsManager'
import AnimalManager from '../../modules/AnimalManager'

class LocationList extends Component {
    state = {
        locations: [],
    }

componentDidMount(){
    LocationsManager.getAll()
    .then((location) => {
        this.setState({
            locations: location
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
    // console.log(this.state)
    return(
        <div className="container-cards">
            {this.state.locations.map(location =>
                <LocationCard
                    key={location.id}
                    location={location}
                    deleteLocation={this.deleteLocation}
                />)}
        </div>
    )
}

}

export default LocationList