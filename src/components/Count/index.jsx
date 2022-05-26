import React, { Component } from 'react'
import store from '../../redux/store'
import { 
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
export default class Count extends Component {

    state={
        time:""
    }

    increment = () => {
        const {value}=this.selectNumber
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        const {value}=this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = () => {
        const {value}=this.selectNumber
        if(store.getState()%2 !==0){
            store.dispatch(createIncrementAction(value*1))
        }
    }
    incrementAsync = () => {
        const {value}=this.selectNumber
       // this.state.time=setTimeout(()=>{
            store.dispatch(createIncrementAsyncAction(value*1,2000))
        //},2000)
    }
    componentWillUnmount(){
        clearTimeout(this.state.time)
    }
    render() {
        return (
            <div>
                <h1>当前求和值：{store.getState()}</h1>
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
