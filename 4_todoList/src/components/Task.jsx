import React from 'react'

export function Task({ task, removeTask, toggleTaskStatus }) {

    return (
        <li>
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }} onClick={toggleTaskStatus}>{task.description}</span>
            <button onClick={removeTask} className='btn-remover'>Remover</button>
        </li>
    )
}
