import { CHANGE_TIMER, GET_TASK_NAME, CHANGE_SECONDS, RESET_COUNT, REMOVE_ITEM } from './actions.js'

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
            return {...state, seconds: state.startMoment ? parseInt((Date.now() - state.startMoment)/1000) : 0}
        case RESET_COUNT:
            return {...state, seconds: 0}
        case REMOVE_ITEM:
            return {...state, doneTasks: state.doneTasks.filter(elem => elem.id !== action.payload)}
        default: 
            return state
    }
}