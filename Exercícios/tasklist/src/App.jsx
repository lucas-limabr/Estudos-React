import './App.css'
import TaskList from './components/TaskList'

function App() {

  let tasks = [
    { id: 1, text: 'Estudar React' },
    { id: 2, text: 'Fazer exercícios' },
    { id: 3, text: 'Ler documentação' }
  ]

  tasks = null;
  
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
    
  )
}

export default App
