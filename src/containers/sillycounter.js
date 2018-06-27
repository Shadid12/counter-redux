import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//css :)
import './silly.css'


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
                <Card className={`card`}>
                    <CardContent>
                        <h1>{this.props.counter}</h1>
                    </CardContent>
                </Card>
                <Button variant="outlined" color="primary" onClick={this.increment}>+</Button>
                <Button variant="outlined" color="secondary" onClick={this.decrement}>-</Button>
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

