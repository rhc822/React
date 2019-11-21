import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'

/* This component routes the click in the NavBar file to apporpriate component (e.g. Home, AnimalList, etc). */

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
{/* {Make sure you add the `exact` attribute here} */}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          console.log(props)
// Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
          {...props}
          />
        }} />

{/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
        <Route path="/employees" render={(props) => {
            return <EmployeeList />
        }} />
        <Route path="/locations" render={(props) => {
            return <LocationList />
        }} />
        <Route path="/owners" render={(props) => {
            return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews