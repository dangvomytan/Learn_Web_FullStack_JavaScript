import React, { useState } from "react";
import { IPropsToDoItem, IToDo } from "../../types/Todo.type";

const TodoItem: React.FC<IPropsToDoItem> = (props: IPropsToDoItem) => {
  // console.log(props);
  const dataTodo = props.dataList;
  const handleDelete = (id:number) =>{
    props.deleteTodoItem(id);
  }
  console.log(dataTodo);
  
  return (
    <>
      {dataTodo.length>0 && dataTodo.map((item) => {
        return (
          <>
            <div className="todo-item">
              {/* <input type="checkbox" /> */}
              <p>{item.name}</p>
              <button>Edit</button>
              <button 
              onClick={()=>handleDelete(item.id)}
              >Delete</button>
            </div>
          </>
        );
      })}
      {dataTodo.length == 0 && <p>No data</p>}
    </>
  );
};

export default TodoItem;
