import React from 'react';
import { connect } from 'react-redux'
import { changeTimer } from '../store/actions'
import Timer from './Timer';
import TaskNameInput from './TaskNameInput';
import { StartStopButton } from './StartStopButton';
import { ScoreTable } from './ScoreTable';
import { store } from '../index'

class MainComponent extends React.Component{
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
    }
}

const mapDispatchToProps = { 
    changeTimer
}

const setStateToLocalStorage = store => {
    localStorage.setItem('redux-store', JSON.stringify(store.getState()))
}

window.addEventListener('beforeunload', () => setStateToLocalStorage(store))

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)