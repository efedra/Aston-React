import {Component} from "react";
import Logger from "./logger";
import React from "react";
import List from "./list";

class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }
    state = {
        data: "",
        sendForm: false,
        disabledForm: false
    };

    handleLog = (event) => {
        this.setState({
            data: event.target.value
        });
        if(event.target.value.trim()==="реакт"){
            this.setState({disabledForm: true})
        }
        else {
            this.setState({disabledForm: false})
        }
    }

    handleReset = () => {
        this.setState({
            data: "",
            sendForm: false,
            disabledForm: false
        })
    }

    focusInput = ()=>{
        this.myRef.current.focus()
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevState)
    }


    render() {
        return (
            <>
                <div>Hello my name is {this.props.name}</div>
                <input ref={this.myRef} value={this.state.data} onChange={this.handleLog}/>
                <div>
                    <button onClick={this.handleReset}>Обнулить</button>
                    <button disabled={this.state.disabledForm} onClick={() => this.setState({sendForm: true})}>Отправить</button>
                    <button onClick={this.focusInput}>Фокус</button>
                </div>
                <Logger data={this.state.data} show></Logger>
                <Logger data={"отправленны"} show={this.state.sendForm}></Logger>
                <List arr={this.state.data.trim().split(' ')}/>
            </>
        )
    }
}

export default ClassComponent