import React, { Component } from 'react'
import './Kennel.css'
import NavBar from './nav/NavBar.js';
import ApplicationViews from './ApplicationViews.js';

/* This component is the "main" app and returns the Navigation bar and application views */

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