import { CHANGE_TIMER } from './actions.js'
import { GET_TASK_NAME } from './actions.js'
import { CHANGE_SECONDS } from './actions.js'
import { RESET_COUNT } from './actions.js'

let initialState

if(localStorage['redux-store']){
    initialState = JSON.parse(localStorage['redux-store'])
} else {
    initialState = {
        isTimerWorking: false,
        attentionBanner: false,
        seconds: 0,
        startTime: {
            hours: null,
            minutes: null,
        },
        startMoment: null,
        taskNameInput: '',
        doneTasks: []
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_TIMER: 
            return {...state, isTimerWorking: !!state.taskNameInput ? !state.isTimerWorking : state.isTimerWorking,
                attentionBanner: !state.taskNameInput,
                startTime: {
                    hours: !state.isTimerWorking ? new Date().getHours() : null,
                    minutes: !state.isTimerWorking ? new Date().getMinutes() : null,
                },
                startMoment: !state.isTimerWorking ? Date.now() : null,
                taskNameInput: state.isTimerWorking ? '' : state.taskNameInput,
                doneTasks: state.isTimerWorking ? [...state.doneTasks, {
                    id: Date.now(),
                    name: state.taskNameInput,
                    startTime: state.startTime,
                    stopTime: {
                        hours: new Date().getHours(),
                        minutes: new Date().getMinutes(),
                    },
                    duration: ((Date.now() - state.startMoment)/1000).toFixed(1)
                }] : [...state.doneTasks]
            }
        case GET_TASK_NAME:
            return {...state, taskNameInput: action.payload}
        case CHANGE_SECONDS:
            return {...state, seconds: parseInt((action.payload - state.startMoment)/1000)}
        case RESET_COUNT:
            return {...state, seconds: 0}
        default: 
            return state
    }
}