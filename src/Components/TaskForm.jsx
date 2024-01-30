import { useState } from "react";

const TaskForm = (props) => {
    // add the adder function through props
    const { addTask } = props;
    // Set the values to be given to the state object
    const [ taskText, setTaskText ] = useState("")
    const [ taskCompletionStatus, setTaskCompletionStatus ] = useState(false)
    // the function to create the object and add it to the state array
    const submitHandler = (e) => {
        // prevent the refresh which would clear state
        e.preventDefault()
        // Make sure there is something being submitted
        if(taskText !== ""){
            let newTask = {
                taskText,
                taskCompletionStatus
            }
            console.log("taskText: ", taskText, "taskCompletionStatus: ", taskCompletionStatus)
            // Add the new object with it's two values to state
            addTask(newTask)
            // reset the values
            setTaskText("")
            setTaskCompletionStatus(false)
        }
        // clear the values even if nothing is submitted
        setTaskText("")
        setTaskCompletionStatus(false)
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                {/* set the value of state */}
                <input type="text" value={taskText} onChange={(e)=> setTaskText(e.target.value)}/>
                <button>Add</button>
            </form>
        </>
    )
}

export default TaskForm