import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import Login from './auth/Login'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeForm from './employee/EmployeeForm'
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'
import Login from './auth/Login'
import OwnerForm from './owner/OwnerForm'

/* This component routes the click in the NavBar file to apporpriate component (e.g. Home, AnimalList, etc). */

class ApplicationViews extends Component {

/* Just a function called by Route requests below and checks to see if there is an item in local storage called "credentials" */

isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
{/* ...props gives access to all properties */}
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
{/* {Make sure you add the `exact` attribute here} */}
        <Route exact path="/animals" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props}/>
          } else {
            return <Redirect to="/login"/>
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
          if (this.isAuthenticated()) {
            return <EmployeeList {...props}/>
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/employees/:employeeId(\d+)" render={(props) => {
            return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props}/>
        }} />

        <Route path="/employees/new" render={(props) => {
            return <EmployeeForm {...props} />
        }} />

        <Route exact path="/locations" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList {...props}/>
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
        }} />

        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />

        <Route exact path="/owners" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerList {...props}/>
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}
          {...props}/>
        }} />

        <Route path='/owners/new' render={(props) => {
          return <OwnerForm { ...props} />
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews