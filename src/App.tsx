import {FC, useState} from "react";
import Header from "./components/Header";
import List from "./components/List";
import {ITask} from "./interfaces/Task";


const App: FC = () => {
  
  const [list, setList] = useState<ITask[]>([]);
  
  return (
    <div>
      <Header list={list} setList={setList}/>
      <List list={list} setList={setList}/>
    </div>
  );
}

export default App;
