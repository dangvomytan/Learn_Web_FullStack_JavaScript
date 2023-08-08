import React from 'react'
import TodoForm from '../../components/TodoForm/TodoForm'
import TodoItem from '../../components/TodoItem/TodoItem'
import './Todo.page.css'
import { IToDo } from '../../types/Todo.type'

const TodoPage:React.FC = () => {
  const TodoList:IToDo[] =[
    {
      id: 1,
      name:'Khong muon lam gi het',
      complete: true,
    },
    {
      id: 2,
      name:'Di bien',
      complete: true,
    },
    {
      id: 3,
      name:'Di choi voi khi',
      complete: true,
    },
  ]

  const [dataTodo,setDataTodo] = React.useState<Array<IToDo>>(TodoList);
  const handleDeleteTodoItem = (id:number)=>{
    setDataTodo(dataTodo.filter(todo=>todo.id !== id))
  }


  const handleAddTodoItem = (data:IToDo):void =>{
    setDataTodo([...dataTodo,{...data}])
  }

  return (
    <div className="todo-app">
    <main className="app-main">
      <div className="todo-list">
      <TodoForm
      addTodoItem={handleAddTodoItem}
      />
      <TodoItem 
      dataList={dataTodo} 
      deleteTodoItem={handleDeleteTodoItem}/>
      </div>
    </main>
  </div>
  )
}

export default TodoPage