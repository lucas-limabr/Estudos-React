export default function TaskList({ tasks }) {

    if (tasks == null || tasks.length == 0) {
        return <p>Não há tarefas a mostrar</p>
    }

    return (
        <div>
            <ol>
                {tasks.map((task) =>
                    <li key={task.id}>{task.text}</li>
                )}
            </ol>
        </div>

    )
}