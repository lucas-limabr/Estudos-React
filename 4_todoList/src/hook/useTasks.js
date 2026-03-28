import { useState, useEffect } from "react"

export default function useTasks() {
    
    //a função parse do objeto JSON converte um JSON em um objeto Javascript
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

    useEffect(() => {
        //a função stringify converte um objeto Javascript em um JSON
        localStorage.setItem('tasks', JSON.stringify(tasks))
    
      }, [tasks])

    return {tasks, setTasks}
}

