import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createIncrementAction} from "../../redux/count_action"
class Count extends Component {

  add = ()=>{
    this.props.jiafa(1)
  }

  render() {
    return (
      <div>
        求和为：{this.props.he}
        <button onClick={this.add}>点我加1</button>
      </div>
    );
  }
}
export default connect(
  state =>  ({he:state}),
  {jiafa:createIncrementAction}
)(Count)
