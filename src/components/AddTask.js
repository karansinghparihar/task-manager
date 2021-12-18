import {useState} from 'react'

const AddTask = ({addTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()

        if ( text==='' ) {
            alert('Please enter your task.')
            return
        }

        addTask({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form  className='add-form' onSubmit={submitHandler}>
           <div className="form-control">
               <label>Task</label>
               <input type='text' value={text} placeholder='Add Task' onChange={(e)=>setText(e.target.value)} />
           </div>
           <div className="form-control">
               <label>Day</label>
               <input type='text' value={day} placeholder='Add Day' onChange={(e)=>setDay(e.target.value)} />
           </div>
           <div className="form-control form-control-check">
               <label>Set Reminder</label>
               <input type='checkbox' checked={reminder} onChange={(e)=>setReminder(e.target.checked)} />
           </div>
           <button className='btn btn-block' type='submit'>Save Task</button>
        </form>
    )
}
export default AddTask;