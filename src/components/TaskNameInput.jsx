import React from 'react'
import TextField from '@material-ui/core/TextField'

export const TaskNameInput = ({ data, edit, isTimerWorking, action, attentionBanner }) => {
    return(
        <>
            <div className={'inputTaskTrue'}>
                <form onSubmit={action}>
                    <TextField 
                        id="standard-basic" 
                        label="Enter task name"
                        value={data}
                        onChange={edit}
                        disabled={isTimerWorking}
                    />
                </form>
            </div>
            {attentionBanner ? <div id="attentionBanner">Attention! Enter your task name!</div> : null}
        </>
    )
}