
export const ADD_TODO = 'ADD_TODO' //action type - ALLOWS TO DEBUG EASIER

//named export 
//action creator - what you call when you want to complete that action - essentially an event handler,
//different because used to call a reducer 
export const addToDo = toDo => {
    return {
        type: ADD_TODO,
        payload: toDo
    }
    
} 