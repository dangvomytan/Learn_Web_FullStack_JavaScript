
export interface IToDo{
     id:number,
     name:string,
     complete:boolean;
}

export interface IPropsToDoItem{
     dataList: IToDo[];
     deleteTodoItem: (id:number) => void;
     
}

export interface IPropsToDoForm{
     addTodoItem:(data:IToDo) => void;
}