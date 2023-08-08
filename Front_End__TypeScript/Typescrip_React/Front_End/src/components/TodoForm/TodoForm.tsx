import React from "react";
import { IPropsToDoForm, IToDo } from "../../types/Todo.type";
import { date } from "yup";

const TodoForm: React.FC<IPropsToDoForm> = (props: IPropsToDoForm) => {
  console.log(props);
  const [valueInput, setValueInput] = React.useState("");

  //xu li nhap du name todo
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  const handleAdd = () => {
   const itemtodo:IToDo ={
    id: Date.now(),
    name: valueInput,
    complete:false,
   }
   props.addTodoItem(itemtodo);
   setValueInput("");
  };
  return (
    <div className="add-todo-form">
      <input
        type="text"
        placeholder="Add a new todo..."
        onChange={handleOnchange}
        value={valueInput}
      />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
};

export default TodoForm;
