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

    componentDidMount() {
        console.log(' componentDidMount')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevState)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return {name:"hello"}
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