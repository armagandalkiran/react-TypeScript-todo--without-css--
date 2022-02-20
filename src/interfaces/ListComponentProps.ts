import {ITask} from "./Task";

export interface IList {
    list: ITask[],
    setList: (val: ITask[]) => void
}