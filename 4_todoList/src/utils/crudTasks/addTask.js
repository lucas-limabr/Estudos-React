export default function addTask(description, setTasks) {

    //operador spread para permitir adição a um array (lista), análogo a um list.add(object) no Java
    setTasks((prevTasks) => [...prevTasks, {
        id: Date.now(),
        description: description,
        done: false
    }])

}