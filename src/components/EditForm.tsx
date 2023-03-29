import { useEffect, useState } from 'react';

//library inports
import { CheckIcon } from '@heroicons/react/24/solid'

type EditFormProps = {
    editedTask: any,
    updateTask: any,
    closeEditMode: any,
}

const EditForm = (props: EditFormProps) => {

    const { editedTask, updateTask, closeEditMode } = props;

    const [updatedTaskName, setUpdatedTaskNamek] = useState(editedTask.name);

    useEffect(() => {
        const closeModalIfEscaped = (e: { key: string; }) => {e.key === 'Escape' && closeEditMode()};
        window.addEventListener('keydown', closeModalIfEscaped);

        return () => {window.removeEventListener('keydown', closeModalIfEscaped)};
    }, [closeEditMode]);

    const handleFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName});
    }

    return (
        <div role='dialog' aria-labelledby='editTask' onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}>
            <form className='todo' onSubmit={handleFormSubmit}>
                <div className='wrapper'>
                    <input type="text" id='editTask' className='input' 
                    value={updatedTaskName} onInput={(e : React.ChangeEvent<HTMLInputElement>) => setUpdatedTaskNamek(e.target.value)} 
                    // can be don in two ways first one above and second one below
                    // value={task} onInput={(e) => setTask((e.target as HTMLInputElement).value)} 
                    required
                    autoFocus
                    maxLength={60}
                    placeholder='Update Task'
                    />
                    <label htmlFor='editTask' className='label'>Enter Task</label>
                </div>
                <button className='btn' aria-label={`Confirm edited task to now read ${updatedTaskName}`} type='submit'>
                    <CheckIcon className="h-6 w-6 text-blue-500"/>
                </button>
            </form>
        </div>
    )
}

export default EditForm