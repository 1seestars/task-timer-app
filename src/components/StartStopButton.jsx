import React from 'react'
import Button from '@material-ui/core/Button'

export const StartStopButton = ({ action }) => <div id="task-btn"><Button variant="contained" color="primary" onClick={action}>Start/Stop</Button></div>