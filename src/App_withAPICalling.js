import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from "./components/AddTask.js";
import About from "./components/About.js";
import Footer from './components/Footer.js'

function App_withAPICalling() {
  const [addButton, setAddButton] = useState(true)
  const [tasks, setTasks] = useState('')

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks()
      console.log(tasks)
      setTasks(tasks)
    }
    getTasks()
  },[])

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'GET'
    })
    const data = await res.json()
    return data
  }

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'GET'
    })
    const data = await res.json()
    return data
  }

  const taskDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const task = await fetchTask(id)
    const updtask = { ...task, reminder: !task.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body : JSON.stringify(updtask)
    })
    const data = await res.json()
    setTasks(tasks.map((task) => id === task.id ? { ...task, reminder: data.reminder } : task))
  }

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 1000)
    // const newTask = { id, ...task }
    const res = await fetch('http://localhost:5000/tasks/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const newTask = await res.json()
    setTasks([...tasks, newTask])
  }

  const addBtnHandler = (e) => {
    setAddButton(!addButton)
  }

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
              <Header title={'Task Tracker'} addBtnHandler={addBtnHandler} addButton={addButton} />
              {addButton === false ? <AddTask addTask={addTask} /> : ''}
              {tasks.length > 0 ? <Tasks tasks={tasks} deleteHandler={taskDelete} toggleReminder={toggleReminder} /> : <p style={{ color: 'red' }}>No tasks available for display</p>}
            </>
          } />
          <Route path='/about' element={<About />} />
          <Route path='*' element={
            <>
              <h1>Page Not Found</h1><br /><Link to='/'><center>Back to App</center></Link>
            </>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App_withAPICalling;
