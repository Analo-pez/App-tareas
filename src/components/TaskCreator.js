import React, { useState } from 'react';

const TaskCreator = props => {
    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = (ev) => {
        props.callback(newTaskName);
        setNewTaskName('')
    };

    return (
        <div className="tasks">
            <input
                type="text"
                className="tasks__input"
                value={newTaskName}
                onChange={updateNewTaskValue} />
            <button className="tasks__btn" onClick={createNewTask}>
                Añadir
            </button>
        </div>
    )

}


export default TaskCreator;