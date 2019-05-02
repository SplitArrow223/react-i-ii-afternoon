import React, { Component } from 'react';
import data from '../data';
import '../App.css'

export default class Main extends Component {
    constructor() {
      super()
      this.state = {
        userId: data,
        index: 0
        

    }
  }
  previous = () => {
     if (this.state.index > 0)
    this.setState({index: this.state.index - 1})
    
  }
  next = () => {
    if (this.state.index < 24)
    this.setState({index: this.state.index + 1})
    

  }
  render() {
    let index = this.state.index
    let id = this.state.userId[index].id
    let name = this.state.userId[index].name.first;
    let last = this.state.userId[index].name.last;
    let city = this.state.userId[index].city
    let country = this.state.userId[index].country
    let emp = this.state.userId[index].employer
    let title = this.state.userId[index].title
    let favM = this.state.userId[index].favoriteMovies
    return(
      <div >
        <div className='main'>
            <h1 className='num'>{id}/25</h1>
          <div className='fonts'>
            <h2>{name} {last}</h2> 
            <p><strong>From:</strong> {city}, {country} </p>
            <p><strong>Job Title:</strong> {title} </p>
            <p><strong>Employer</strong> {emp}</p>
            <p><strong>Favorite Movies:</strong></p>
            <ul>
              <h5 className='mvs'>1. {favM[0]}</h5> 
              <h5 className='mvs'>2. {favM[1]}</h5>
              <h5 className='mvs'>3. {favM[2]}</h5>
            </ul>

          </div>
        </div>
        <div>
          <button className='btn1' onClick={this.previous}> {"< Previous"}</button>
          <button className='btn2' >Edit</button>
          <button className='btn2'>Delete</button>
          <button className='btn2' >New</button>
          <button className='btn5' onClick={this.next}>{'Next >'} </button>
        </div>
      </div>
    )
  }
}


      
