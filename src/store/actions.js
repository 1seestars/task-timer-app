export const CHANGE_TIMER = 'CHANGE_TIMER'
export const GET_TASK_NAME = 'GET_TASK_NAME'
export const CHANGE_SECONDS = 'CHANGE_SECONDS'
export const RESET_COUNT = 'RESET_COUNT'

export const changeTimer = () => ( {type: CHANGE_TIMER } )
export const inputTaskName = newTaskName => ( {type: GET_TASK_NAME, payload: newTaskName} )
export const changeSecondsCount = () => ( {type: CHANGE_SECONDS} )
export const resetCount = () => ( {type: RESET_COUNT} )