import React from 'react'
import { connect } from 'react-redux'
import { changeTimer, inputTaskName } from '../store/actions'
import TextField from '@material-ui/core/TextField'

const TaskNameInput = props => {
    const {
        isTimerWorking,
        attentionBanner,
        taskNameInput,
        changeTimer,
        inputTaskName
    } = props
    return(
        <>
            <div className={'inputTaskTrue'}>
                <form onSubmit={changeTimer}>
                    <TextField 
                        id="standard-basic" 
                        label="Enter task name"
                        value={taskNameInput}
                        onChange={e => inputTaskName(e.target.value)}
                        disabled={isTimerWorking}
                    />
                </form>
            </div>
            {attentionBanner ? <div id="attentionBanner">Attention! Enter your task name!</div> : null}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isTimerWorking: state.isTimerWorking,
        attentionBanner: state.attentionBanner,
        taskNameInput: state.taskNameInput,
    }
}

const mapDispatchToProps = { 
    changeTimer, 
    inputTaskName, 
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskNameInput)