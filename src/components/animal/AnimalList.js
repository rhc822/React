import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

/* This component initially sets the animals state to empty, then in componentDidMount() adds the fetch call info to the state. Finally, it takes each individual animal and puts it in AnimalCard to be rendered. */

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

componentDidMount(){
    // console.log("ANIMAL LIST: ComponentDidMount");
    // getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAll()
    .then((animalArray) => {
        // console.log(animalArray)
        this.setState({
            animals: animalArray
        })
    })
}

/* The delete animal function definition receives the ID of the animal as a parameter. Then, runs the fetch (delete) call from AnimalManager, then runs a fetch call to get all animals (which doesn't include the now deleted animal). Finally, the state is set to the new animals list. */

deleteAnimal = id => {
    AnimalManager.delete(id)
    .then(() => {
      AnimalManager.getAll()
      .then((newAnimals) => {
        this.setState({
            animals: newAnimals
        })
      })
    })
  }

  render(){
    // console.log("AnimalList: Render");
    // console.log(this.state)

    /* For adding delete, the return definition was modified to include the deleteAnimal function above, which enables AnimalCard to access it. */

    return(
        <React.Fragment>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/animals/new")}}>
                Admit Animal
            </button>
        </section>
        <div className="container-cards">
            {this.state.animals.map(animal =>
            <AnimalCard
                key={animal.id}
                animal={animal}
                deleteAnimal={this.deleteAnimal}
                {...this.props}
            />
            )}
        </div>
        </React.Fragment>
        )
  }
}

export default AnimalList