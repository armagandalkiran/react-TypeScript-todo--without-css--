import {FC, ChangeEvent, useState} from 'react';
import {IList} from "../interfaces/ListComponentProps";

const initialState = {
  taskName:"",
  number:0
}

const Header: FC<IList> = ({list, setList}) => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.name === "task" ? setTask(event.target.value) : setDeadline(Number(event.target.value));
  }

  const handleClick = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setList([...list, newTask]);
    setTask(initialState.taskName);
    setDeadline(initialState.number);
  }


  return (
    <div>
        <div>
            <div>
                <input type="text" name="task" value={task} placeholder="Enter task .." onChange={handleChange}/>
                <input type="number" name="deadline" value={deadline} placeholder="Enter deadline .." onChange={handleChange}/>
            </div>
          <button onClick={handleClick}>Add Task</button>
        </div>
    </div>
  )
}

export default Header;