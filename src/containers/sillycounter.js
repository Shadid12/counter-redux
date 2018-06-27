import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// actions 
import {counterIncrement, counterDecrement} from '../actions/index'

class SillyCounter extends React.Component {

    increment = () => {
        let counter = this.props.counter + 1
        this.props.counterIncrement(counter)
    }

    decrement = () => {
        let counter = this.props.counter - 1
        this.props.counterDecrement(counter)
    }

    render() {
        return(
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        counterIncrement: counterIncrement,
        counterDecrement: counterDecrement
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SillyCounter);

