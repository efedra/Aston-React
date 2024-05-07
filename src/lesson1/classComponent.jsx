import {Component} from "react";
import Logger from "./logger";


class ClassComponent extends Component {

    state = {data: ""};

    handleLog = (event) => {
        this.setState({
            data: event.target.value
        });
    }

    handleReset = () => {
        this.setState({
            data: ""
        })
    }

    render() {
        return (
            <div>
                <div>Hello my name is {this.props.name}</div>
                <input value={this.state.data} onChange={this.handleLog}/>
                <div>
                    <button onClick={this.handleReset}>Обнулить</button>
                </div>
                <Logger data={this.state.data}></Logger>
            </div>
        )
    }
}

export default ClassComponent