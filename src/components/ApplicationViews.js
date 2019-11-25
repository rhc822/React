import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'
import Login from './auth/Login'


/* This component routes the click in the NavBar file to apporpriate component (e.g. Home, AnimalList, etc). */

class ApplicationViews extends Component {

  // Check if credentials are in local storage
  // returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
{/* {Make sure you add the `exact` attribute here} */}
        <Route exact path="/animals" render={props => {
            if (this.isAuthenticated()) {
                return <AnimalList {...props} />
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // console.log(props)
// props.match.params.animalId grabs the ID from the URL.
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

        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }} />

        <Route exact path="/employees" render={(props) => {
            return <EmployeeList {...props}/>
        }} />

        <Route path="/employee/:employeeId(\d+)" render={(props) => {
            return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}/>
        }} />

        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
            return <EmployeeWithAnimals {...props} />
        }} />

        <Route exact path="/locations" render={(props) => {
            return <LocationList />
        }} />

        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}/>
        }} />

        <Route exact path="/owners" render={(props) => {
            return <OwnerList />
        }} />

        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}
          {...props}/>
        }} />

        <Route path="/login" component={Login} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews