import React, { useReducer } from 'react';
import { taskReducer } from '../components/schedulator/taskReducer';
import { TASK_ADD_TASK, TASK_EDIT_TASK, TASK_DELETE_TASK } from '../components/schedulator/reducer/constant';

export const useTasks = (initialState = []) => {


  const [ tasks, dispatchTask ] = useReducer(taskReducer)

     const handleNewTask = (task) => {
      const action = {
        type: TASK_ADD_TASK,
        payload: task,
      }
      dispatchTask( action );
     }

     const handleEditTask = (task) => {
      const action = {
        type: TASK_EDIT_TASK,
        payload: task,
      }
      dispatchTask( action );
     }
     
     const handleDeleteTask = (task) => {
      const action = {
        type: TASK_DELETE_TASK,
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
