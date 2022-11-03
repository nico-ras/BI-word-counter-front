import React, { useState } from 'react'

export const useForm = (initialForm) => {

    const [formState, setFormState] = useState(initialForm);

    const onSetFormState = (editableState) => {
      setFormState(editableState)
    }

    const onInputChange = ({ target }) => {
      const { name, value } = target;
      
      setFormState({
          ...formState,
          [ name ]: value,
      })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    

  return {
    ...formState,
    formState,
    task_name: formState.task_name,
    duration: formState.duration,
    onInputChange,
    onResetForm,
    onSetFormState,
  }
}
