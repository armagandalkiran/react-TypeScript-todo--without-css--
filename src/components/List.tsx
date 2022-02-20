import {FC} from 'react';
import {IList} from "../interfaces/ListComponentProps";
import {ITask} from "../interfaces/Task";
import Task from "../components/Task";

const List: FC<IList> = ({list,setList}) => {

  const handleComplete = (taskNameToDelete:string):void => {
    setList(list.filter((task)=>{
        return task.taskName !== taskNameToDelete;
    }))
  }  

  return (
    <ul>
    {list.map((item:ITask,key:number)=>{
        return <span><Task key={key} taskName={item.taskName} deadline={item.deadline}/>
        <button onClick={()=>handleComplete(item.taskName)}>X</button>
        </span>
    })
    }
    </ul>
  )
}

export default List;