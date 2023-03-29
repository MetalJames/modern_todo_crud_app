import TaskItem from './TaskItem';

import styles from './TaskList.module.css';

type TaskListProps = {
    tasks: {
        name: string; 
        checked: boolean, 
        id: string
    }[],
    deleteTask: any,
    toggleTask: any,
    enterEditMode: any,
}

const TaskList = (props: TaskListProps) => {

    const { tasks, deleteTask, toggleTask, enterEditMode } = props;

    return (
        <ul className={styles.tasks}>
            {tasks.sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime()).map((task: {name: string; checked: boolean, id: string}) => (
                <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} enterEditMode={enterEditMode} />
            ))}
        </ul>
    )
}

export default TaskList