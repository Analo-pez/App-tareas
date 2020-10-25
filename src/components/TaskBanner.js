import React from 'react';

const TaskBanner = props => (
    <h4 className="banner__title">
        App de tareas {props.userName}
        <span className="banner__title--sub"> {props.taskItems.filter(t => !t.done).length} / {props.taskItems.length} <small className="banner__title--sub1"> tareas pendientes</small> </span>
    </h4 >
)

export default TaskBanner;