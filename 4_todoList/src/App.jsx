import './App.css'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import useTasks from './hook/useTasks'
import addTask from './utils/crudTasks/addTask'
import removeTask from './utils/crudTasks/removeTask'
import toggleTaskStatus from './utils/crudTasks/toggleTaskStatus'


function App() {

  const { tasks, setTasks } = useTasks()

  const fnRemoveTask = removeTask(setTasks)

  const fnToggleTaskStatus = toggleTaskStatus(setTasks)

  function handleAddTask(description) {
    addTask(description, setTasks)
  }

  return (
    <>
      <h2>Lista de tarefas</h2>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} removeTask={fnRemoveTask} toggleTaskStatus={fnToggleTaskStatus} />
    </>
  )
}

export default App
