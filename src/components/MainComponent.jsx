import React from 'react';
import { connect } from 'react-redux'
import { changeTimer, inputTaskName, changeSecondsCount, resetCount } from '../store/actions'
import { Timer } from './Timer';
import { TaskNameInput } from './TaskNameInput';
import { StartStopButton } from './StartStopButton';
import { ScoreTable } from './ScoreTable';

class MainComponent extends React.Component{
    componentWillUnmount(){
        localStorage.setItem('redux-store', JSON.stringify(this.props.state))
    }

    render(){
        const { 
            isTimerWorking,
            attentionBanner,
            seconds,
            taskNameInput,
            doneTasks,
            changeTimer,
            inputTaskName,
            changeSecondsCount,
            resetCount
        } = this.props

        return(
            <div id="wrapper">
                <Timer 
                    isTimerWorking={isTimerWorking} 
                    seconds={seconds}
                    changeSecondsCount={changeSecondsCount}
                    resetCount={resetCount}
                />
                <TaskNameInput 
                    data={taskNameInput}
                    edit={e => inputTaskName(e.target.value)}
                    isTimerWorking={isTimerWorking}
                    action={changeTimer}
                    attentionBanner={attentionBanner}
                />
                <StartStopButton action={changeTimer} />
                <ScoreTable data={doneTasks} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isTimerWorking: state.isTimerWorking,
        attentionBanner: state.attentionBanner,
        taskNameInput: state.taskNameInput,
        doneTasks: state.doneTasks,
        seconds: state.seconds,
        state
    }
}

const mapDispatchToProps = { 
    changeTimer, 
    inputTaskName, 
    changeSecondsCount,
    resetCount
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)