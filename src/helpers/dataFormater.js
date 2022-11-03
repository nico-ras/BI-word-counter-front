export const dataFormater = (data) => {
  const newData = data.map((item) => {
   return {
        'task_id': item.task_id.toString(),
        'task_name': item.task_name,
        'duration': parseInt(item.duration),    
    }
});
  return newData
};
