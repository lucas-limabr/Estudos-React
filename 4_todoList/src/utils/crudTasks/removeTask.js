export default function removeTask(setTasks) {
    
    const removeTask = (idTask) => {

        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== idTask))
    }
    
   return removeTask
}