import React, { useState } from 'react'
import useAddTask from '../utils/crudTasks/addTask'


export default function TaskInput({ onAddTask }) {

    const [inputTask, setInputTask] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const description = inputTask.trim()

        if (!description) return

        onAddTask(description)
        setInputTask("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={inputTask} onChange={(e) => setInputTask(e.target.value)} type="text" name="tarefa" id="tarefa" placeholder='Adicione uma tarefa' />
            <button type="submit">Adicionar</button>
        </form>
    )
}
