import { useState, Fragment } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from "./components/AddTask.js";
import About from "./components/About.js";
import Footer from './components/Footer.js'

function App() {
  const [addButton, setAddButton] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doc Appointment',
      day: 'Feb 20',
      reminder: true
    },
    {
      id: 2,
      text: 'Bird watching',
      day: 'June 27',
      reminder: true
    },
    {
      id: 3,
      text: 'Skating',
      day: 'Aug 14',
      reminder: true
    }
  ])

  const taskDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => id === task.id ? { ...task, reminder: !task.reminder } : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000)
    const newTask = { id, ...task }
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;