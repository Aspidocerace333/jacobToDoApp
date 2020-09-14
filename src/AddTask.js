import React, { Component } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import './bootstrap/css/bootstrap.css'
import './bootstrap/css/bootstrap.min.css'
import TaskItems from './TaskItems'
import NavBar from './nav';
import Footer from './footer';

library.add(faTrash, faEdit, faPlus);
class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            currentTask: {
                task: '',
                key: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.editTask = this.editTask.bind(this)
    }

    handleChange(e) {
        this.setState({
            currentTask: {
                task: e.target.value,
                key: Date.now()
            }
        })
    }

    deleteTask(key) {
        let filteredByKey = this.state.tasks.filter((item) => {
            return (item.key !== key)
        })

        this.setState({ tasks: filteredByKey })
    }

    editTask(text, key) {
        const tasks = this.state.tasks;
        tasks.map(task => {
            if (task.key === key) {
                task.task = text;
            }
            return '';
        })
        this.setState({
            tasks: tasks
        })
    }

    handleSubmit(e) {
        e.preventDefault() //Mba ialana @sumission classique
        //var prevTasks = this.state.tasks
        /*var newTask = {
          task: this.state.task,
          key: Date.now()
        };*/
        const newTask = this.state.currentTask;
        if (newTask !== '') {
            const tasks = [...this.state.tasks, newTask]
            this.setState({
                tasks: tasks,
                currentTask: {
                    task: '',
                    key: ''
                }
            });
        }

    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="sec1">
                    <div className="style-div">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-ajout">
                                <input type="text" name="task" value={this.state.currentTask.task} onChange={this.handleChange} className="style-input form-control" />
                            </div>
                            <div className="ajout">
                                <button className="btn style-btn">Ajouter</button>
                            </div>
                        </form>
                    </div>
                    <div className="style-div">
                        <TaskItems tasks={this.state.tasks} deleteT={this.deleteTask} editT={this.editTask} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default AddTask;
