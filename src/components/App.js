import React, { useState, useEffect } from 'react';
import '../App.scss';
import TaskRow from './TaskRow'
import TaskBanner from './TaskBanner'
import TaskCreator from './TaskCreator'
import VisibilityControl from './VisibilityControl';

const App = () => {

  // DECLARO EL ESTADO INICIAL DEL COMPONENTE 
  const [userName, setUserName] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const [showCompleted, setShowCompleted] = useState(true)


  // MOSTRAR Y GUARDAR DATOS DE LOCALSTORAGE
  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data != null) {
      setTaskItems(JSON.parse(data))
    } else {
      setUserName('')
      setTaskItems([
        { name: 'Task One Example', done: false },
        { name: 'Task Two Example', done: false },
        { name: 'Task Three Example', done: true }
      ])
      setShowCompleted(true);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])


  //FUNCIÓN CREAR TAREA
  const createTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    } else {
      alert('La tarea está listada')
    }
  }


  //CREAR FUNCIONALIDAD PARA ELIMINAR TAREAS INDIVIDUALES
  // let deleteTaskList = [];
  // const deleteTask = ev => {
  //   let clicked = ev.currentTarget.id;
  //   let clickedIndex = taskItems.findIndex(t => t.name === clicked);
  //   setTaskItems(taskItems.splice(clickedIndex, 1));
  //   deleteTaskList.push(clicked)
  //   console.log(clicked, taskItems)
  //   console.log(deleteTaskList, clickedIndex)
  // }



  // FUNCIÓN PARA MODIFICAR CHECKED TRUE/FALSE
  const toggleTask = task =>
    setTaskItems(taskItems.map(t =>
      (t.name === task.name ? { ...t, done: !t.done } : t)));



  // FUNCIÓN PARA MOSTRAR TAREAS REALIZADAS EN OTRA TABLA
  const taskTableRows = (doneValue) =>
    taskItems.filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
        // callbackDelete={deleteTask}  meter en etiqueta TaskRow
      ))


  return (
    <div className="page">
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator callback={createTask} />
      <table className="page__table">
        <thead className="page__table--head">
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody className="page__table--body">
          {taskTableRows(false)}
        </tbody>
      </table>
      <div>
        <VisibilityControl
          isChecked={showCompleted}
          callbackCheck={checked => setShowCompleted(checked)}
        />
      </div>
      {
        showCompleted && (
          <table className="page__table">
            <thead className="page__table--head">
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody className="page__table--body">
              {taskTableRows(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}


export default App;
