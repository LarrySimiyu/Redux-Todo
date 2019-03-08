
import React, { Component } from 'react'

import { addToDo } from '../actions/index'; //action creator
import { connect } from 'react-redux' // allows to map state to props

class AddToDo extends Component {

    state = {
        toDoText: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name] : e.target.value //bracket notation with dot notation 
        })
    }

    addToDo = e => {
        e.preventDefault();
        this.props.addToDo(this.state.toDoText)
        this.setState({
            toDoText: ''
        })

    }

  render() {
      
    return (
      <div>
          <form
            onSubmit={this.addToDo}
          >
              <input 
                name='toDoText'
                placeholder='enter to do'
                value={this.state.toDoText} // controlled inputs get their value form state
                onChange={this.handleChanges}
                
              />

              <button
                type='submit'
              >ADD</button>
          </form>
        
      </div>
    )
  }
}

export default connect(null,{ addToDo})(AddToDo)
