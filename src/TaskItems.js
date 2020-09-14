import React from "react";
import './TaskItems.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskItems({ tasks, deleteT, editT }) {

    var listTasks = tasks.map((task) => {
        return <div>
            <div key={task.key}>
                <div className="input-ajout2">
                    <input type="text" id={task.key} value={task.task} onChange={(e) =>
                        editT(e.target.value, task.key)} className="style-input2 form-control" />
                </div>
                <div className="ajout2 mt-2">
                    <button className="btn btn-danger" onClick={() => deleteT(task.key)}>
                        <span>
                            <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    })

    return <div>{listTasks}</div>

}

export default TaskItems