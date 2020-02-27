import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Hello React Babel Webpack</h1>
                <form>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </form>
                <div>{this.state.value}</div>
            </div>
        )
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper): false;