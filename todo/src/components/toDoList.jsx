import React from 'react'
import { connect } from 'react-redux' // allows to map state to props

const ToDoList = props => {

    if (props.toDos.length === 0) {
        return (
            <h1>enter sum blood</h1>
        );

    }
  return (
    <div>
        
        {props.toDos.map( todo => {
            
            return <p key={todo.id}>{todo.todo}</p>
        })}

    </div>
  )
}

const mapStateToProps = (state) => ({
    toDos: state.toDos
 })
export default connect(mapStateToProps, {})(ToDoList)


