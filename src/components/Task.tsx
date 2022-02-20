import {FC} from 'react';
import {ITask} from "../interfaces/Task"

const Task:FC<ITask> = ({taskName,deadline}) => {
    
  return (
    <li>{taskName} {deadline}</li>
  )
}

export default Task