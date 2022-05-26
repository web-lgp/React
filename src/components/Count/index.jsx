import React, { Component } from 'react'
export default class Count extends Component {

    state = {
        time: ""
    }
    increment = () => {
        const { value } = this.selectNumber
        this.props.jia(value * 1)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 == 1) {
            this.props.jia(value * 1)
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.yibu(value * 1,2000)
    }
    componentWillUnmount() {
        clearTimeout(this.state.time)
    }
    render() {
        return (
            <div>
                <h1>当前求和值：{this.props.count}</h1>
                <select ref={p => this.selectNumber = p}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
