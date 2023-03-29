import { useState } from 'react';

//library inports
import { PlusIcon } from '@heroicons/react/24/solid'

type CustomFormProps = {
    addTask: any;
}

const CustomForm = (props: CustomFormProps) => {

    const { addTask } = props;

    const [task, setTask] = useState('');

    const handleFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now(),
        });
        setTask('');
    }

    return (
        <form className='todo' onSubmit={handleFormSubmit}>
            <div className='wrapper'>
                <input type="text" id='task' className='input' 
                value={task} onInput={(e : React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} 
                // can be don in two ways first one above and second one below
                // value={task} onInput={(e) => setTask((e.target as HTMLInputElement).value)} 
                required
                autoFocus
                maxLength={60}
                placeholder='Enter Task'
                />
                <label htmlFor='task' className='label'>Enter Task</label>
            </div>
            <button className='btn' aria-label='Add Task' type='submit'>
                <PlusIcon className="h-6 w-6 text-blue-500"/>
            </button>
        </form>
    )
}

export default CustomForm