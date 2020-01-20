import React from 'react';
import { connect } from 'react-redux'
import { changeTimer } from '../store/actions'
import Timer from './Timer';
import TaskNameInput from './TaskNameInput';
import { StartStopButton } from './StartStopButton';
import { ScoreTable } from './ScoreTable';

class MainComponent extends React.Component{
    componentWillUnmount(){
        localStorage.setItem('redux-store', JSON.stringify(this.props.state))
    }

    render(){
        const { 
            doneTasks,
            changeTimer
        } = this.props

        return(
            <div id="wrapper">
                <Timer />
                <TaskNameInput />
                <StartStopButton action={changeTimer} />
                <ScoreTable data={doneTasks} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        doneTasks: state.doneTasks,
        state
    }
}

const mapDispatchToProps = { 
    changeTimer, 
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)