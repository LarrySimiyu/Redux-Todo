import { ADD_TODO } from '../actions';


const initialState = {
    toDos : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO :
            const newToDo = {
                id: Date.now(),
                todo: action.payload,
                completed: false

            }



            
                return {
                    ...state, 
                    toDos: [...state.toDos, newToDo],

                   
                }
                default : return state
    } // a pretty if else statement
}