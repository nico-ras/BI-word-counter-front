import React, { useReducer } from 'react';
import { taskReducer } from '../components/schedulator/taskReducer';

export const useTasks = (initialState = []) => {


  const [ tasks, dispatchTask ] = useReducer(taskReducer)

     const handleNewTask = (task) => {
      const action = {
        type: '[TASK] Add Task',
        payload: task,
      }
      dispatchTask( action );
     }

     const handleEditTask = (task) => {
      const action = {
        type: '[TASK] Edit Task',
        payload: task,
      }
      dispatchTask( action );
     }
     
     const handleDeleteTask = (task) => {
      const action = {
        type: '[TASK] Delete Task',
        payload: task,
      }
      dispatchTask( action );
     }


  return {
    ...tasks,
    tasks,
    initialState,
    handleNewTask,
    handleEditTask,
    handleDeleteTask
  }
}
