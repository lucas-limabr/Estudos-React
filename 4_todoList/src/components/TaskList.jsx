import React from 'react'
import { Task } from './Task'

export default function TaskList({ tasks, removeTask, toggleTaskStatus }) {

    if (tasks.length === 0) {
        return <p>Não há tarefas</p>
    }

    return (
        <ul>
            {
                tasks.map((task) =>
                    <Task key={task.id} task={task} removeTask={() => removeTask(task.id)} toggleTaskStatus={() => toggleTaskStatus(task.id)} />
                )
            }
        </ul>
    )
}
