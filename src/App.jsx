import { useState } from 'react'
import './App.css'
import TaskForm from './Components/TaskForm'
import TaskDisplay from './Components/TaskDisplay'

function App() {
  // Create an array of tasks
  const [ taskArray, setTaskArray ] = useState([])
// A function to add a task to the state array
  const addTask = (newTask) => {
    console.log("newTask text: ", newTask.taskText, "newTask completion status: ", newTask.taskCompletionStatus)
    setTaskArray((prevTaskArray)=> [...prevTaskArray, newTask])
  }
  // Function to delete an array item by index
  const deleteTask = (selectedIndex) => {
    console.log("Index of task to delete: ", selectedIndex)
    const tasksMinusSelected = taskArray.filter((task, index)=> index !== selectedIndex)
    setTaskArray(tasksMinusSelected)
  }
  // Function to edit an array item by index
  const updateOneTask = (selectedIndex) => {
    console.log("updateOneTask selectedIndex: ", selectedIndex)
    // create a copy of the array and select one index item to edit
    const listToEdit = taskArray.map((task, index) => {
      if(index == selectedIndex) {
        if(task.taskCompletionStatus == false){
          // update by mapping the rest of the object and one key/value to change
          task = {...task, taskCompletionStatus: true}
        }
        else{
          task = {...task, taskCompletionStatus: false}
        }
      }
      return task
    })
    setTaskArray(listToEdit)
  }
  return (
    <>
      {/* Insert the functions and the state array into the child components */}
      <TaskForm addTask={addTask} />
      <TaskDisplay taskArray={taskArray} deleteTask={deleteTask} updateOneTask={updateOneTask} />z
    </>
  )
}

export default App
