function Task(taskName) {
    return (
        <li>
            <h2>{taskName}</h2>
            <button>
                <span>✓︁</span>
            </button>
        </li>
    )
}

export default Task;