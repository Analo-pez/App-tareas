import React from 'react';

const VisibilityControl = props => {
    return (
        <div className="visibility">
            <input
                type="checkbox"
                className="visibility__input"
                checked={props.isChecked}
                onChange={e => props.callbackCheck(e.target.checked)}
            />
            <label className="visibility__label">
                Mostrar tareas completadas
            </label>
        </div>
    )
}

export default VisibilityControl;