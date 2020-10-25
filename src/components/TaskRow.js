import React from 'react'

const TaskRow = props => {

    return (
        <tr key={props.task.name}>
            <td>{props.task.name}</td>
            <td>
                <input type="checkbox" checked={props.task.done}
                    onChange={() => props.toggleTask(props.task)} />
            </td>
            {/* <td>
                <button onClick={props.callbackDelete} id={props.task.name}> X</button>
            </td> */}
        </tr>
    )
};


export default TaskRow;