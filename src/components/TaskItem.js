import React, {Component} from "react";

class TaskItem extends Component {
    changeStatus = () => {
        this.props.changStatus(this.props.task.id);
    }

    removeTask = () => {
        this.props.removeTask(this.props.task.id);
    }

    render() {
        let { task,index } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span onClick={this.changeStatus} className={task.status ? 'label label-success':'label label-danger'}>{task.status? 'Kich hoat': 'An'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button onClick={this.removeTask} type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;