import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard';
import EmployeeCard from './employee/EmployeeCard.js';
import LocationCard from './location/LocationCard.js';
import OwnerCard from './owner/OwnerCard.js';
import NavBar from './nav/NavBar.js';
import ApplicationViews from './ApplicationViews.js';

class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        );
    }
}

export default Kennel