export const taskReducer = ( initialState = [], action ) => {

    switch ( action.type ) {

        case '[TASK] Add Task':
            return [ ...initialState, action.payload ];

        case '[TASK] Edit Task':
            return [];
            
        case '[TASK] Delete Task':
            return initialState.filter( task => task.id !== action.payload );    

        default:
            return initialState;
    }
}