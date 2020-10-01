import React, {Component} from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm: false
        };
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    changStatus = (id) => {
        let { tasks } = this.state;
        let index = this.findIndex(id);
        tasks[index].status = !tasks[index].status;
        this.setState({
            tasks: tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    findIndex = (id) => {
        let indexTask = 0;
        let {tasks} = this.state;
        tasks.forEach((task, index) =>{
            if (task.id === id) {
                indexTask = index;

                return false;
            }
        });

        return indexTask;
    }

    removeTask = (id) => {
        let {tasks} = this.state;
        tasks = tasks.filter((task) => {
            return task.id !== id;
        });

        this.setState({
            tasks: tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    addTaskForm = () =>{
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    }
    onSubmit = (data) => {
        data.id = Math.random(10, 100);
        let { tasks } =  this.state;
        tasks.push(data);
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // this.state.tasks.push(data);
     }

  render() {
      let {isDisplayForm} = this.state;
      let elmForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm = {this.onCloseForm}/> : '';
    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr/>
            </div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {elmForm}
                </div>
                <div className={isDisplayForm? 'col-xs-8 col-sm-8 col-md-8 col-lg-8': 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                    <button type="button" className="btn btn-primary" onClick={this.addTaskForm}>
                        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>
                   <Control />
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <TaskList tasks={this.state.tasks} changStatus={this.changStatus} removeTask={this.removeTask} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
