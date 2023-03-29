import { useState } from 'react';
import styles from './TaskItem.module.css';

// Library imports
import { CheckIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

type TaskItemProps = {
    task: {
        name: string; 
        checked: boolean, 
        id: string
    }
}

const TaskItem = (props: TaskItemProps) => {

    const { task } = props;

    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckboxChange = (e: any) => {
        setIsChecked(!isChecked);
    };

    return (
        <li className={styles.task}>
            <div className={styles['task-group']}>
                <input type='checkbox' className={styles.checkbox} checked={isChecked} onChange={handleCheckboxChange} name={task.name} id={task.id}/>
                <label htmlFor={task.id} className={styles.label}>
                    {task.name}
                    <p className={styles.checkmark}>
                        <CheckIcon strokeWidth={2} width={24} height={24}/>
                    </p>
                </label>
                <div className={styles['task-group']}>
                    <button className='btn' aria-label={`Update ${task.name} Task`}
                    // onClick={}
                    >
                        <PencilSquareIcon width={24} height={24} />
                    </button>
                    <button className={`btn ${styles.delete}`} aria-label={`Delete ${task.name} Task`}
                    // onClick={}
                    >
                        <TrashIcon width={24} height={24} />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TaskItem