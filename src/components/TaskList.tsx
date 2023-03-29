import TaskItem from './TaskItem';

import styles from './TaskList.module.css';

type TaskListProps = {
    tasks: {
        name: string; 
        checked: boolean, 
        id: string
    }[]
}

const TaskList = (props: TaskListProps) => {

    const { tasks } = props;

    return (
        <ul className={styles.tasks}>
            {tasks.sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime()).map((task: {name: string; checked: boolean, id: string}) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
}

export default TaskList