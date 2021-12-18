import Task from './Task.js'

const Tasks = ({tasks, deleteHandler, toggleReminder}) => {
    return (
        <>
        {
            tasks.map((task, index) => {
               return <Task key={index} task={task} deleteHandler={deleteHandler} toggleReminder={toggleReminder} />
            })
        }
        </>
    )
}
export default Tasks;