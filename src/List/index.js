import React from "react";

const List = (props) => {
    let tasks = props.tasks;
    console.log(tasks);
    function setStatus(id, status){
      let taskSelected = tasks.findIndex((obj => obj.id === id));
      if (status === 'done') {
        tasks[taskSelected].done = true;
      }
      props._stateTasks(tasks)
    }
  return (
    <ul>
      {tasks.map((item) => (
        <li key={item.id} onClick={setStatus.bind(this, item.id, 'done')}>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
