
const TaskDisplay = (props) => {
    // Pass in the state array and the funtions through props
    const { taskArray, deleteTask, updateOneTask } = props;

    return(
        // List out all the state array ites through their own divs
        taskArray.map((task, index) => (
            <div key={index}>
                    {/* conditional strikethrough based on task.completionStatus */}
                    <p style={{textDecoration: task.taskCompletionStatus ? "line-through" : null }}>{task.taskText}</p>
                    {/* the function deletes by index */}
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                    {/* use an arrow function to prevent an infinite loop */}
                    <input type="checkbox" onClick={()=>updateOneTask(index)}></input>
            </div>
        ))
    )

}
export default TaskDisplay