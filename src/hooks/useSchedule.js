import React, { useState } from 'react'

export const useSchedule = (initialState = {}) => {

  
    const [schedule, setSchedule] = useState({ data: null });



    const handleGetRandSchedule = async () => {

        const url = 'http://localhost:3001/schedulator';

        const resp = await fetch(url);
        const { response } = await resp.json();

        setSchedule({
            ...schedule,
            data: response,
        });

    }


    const handleGetSchedule = async () => {
        return;
    }





  return {
    schedule,
     handleGetRandSchedule, 
     handleGetSchedule, 
  }
}
