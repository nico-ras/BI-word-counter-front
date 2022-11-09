
import { TASK_ADD_TASK, TASK_DELETE_TASK, TASK_EDIT_TASK } from './reducer/constant';

export const taskReducer = ( initialState = [], action ) => {

    switch ( action.type ) {

        case TASK_ADD_TASK:
            return [ ...initialState, action.payload ];

        case TASK_EDIT_TASK:
            return initialState.map( task => task.task_id == action.payload.task_id ? action.payload : task );
            
        case TASK_DELETE_TASK:
            return initialState.filter( task => task.task_id !== action.payload );    

        default:
            return initialState;
    }
}