export default function toggleTaskStatus(setTasks) {
    
     const toggleTaskStatus = (idTask) => {
    
        //Usando prevTasks, você garante que está usando o estado mais recente, é o recomendado
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            //...task copia todos os atributos do objeto anterior, mas, em seguida, altera o valor de uma propriedade deste objeto apenas
            task.id === idTask ?
              { ...task, done: !task.done }
    
              : task)
        )
      }

      return toggleTaskStatus
}