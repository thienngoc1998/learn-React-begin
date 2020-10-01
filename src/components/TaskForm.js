import React, {Component} from "react";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: false
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if (name == 'status') {
            value = target.value == 'true' ? true: false;
        }
        this.setState({
            [name]: value
        })

    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: ''
        });
        this.onCloseForm();
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc</h3>
                    <span className="fa fa-times-circle pull-right" onClick={this.onClosForm}></span>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" name="name" value={this.state.name}
                                   onChange={this.onChange}/>
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" value={this.state.status} name="status"
                                onChange={this.onChange} required="required">
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>
                            &nbsp;
                            <button type="reset" className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;