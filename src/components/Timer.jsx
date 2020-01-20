import React from 'react'
import { connect } from 'react-redux'
import { changeSecondsCount, resetCount } from '../store/actions'

class Timer extends React.Component{
    componentDidMount(){
        this.props.changeSecondsCount()
    }
    render(){
        const {isTimerWorking, seconds, changeSecondsCount, resetCount} = this.props
        if(isTimerWorking){
            setTimeout(() => changeSecondsCount(), 1000)
        } else if(seconds){
            setImmediate(() => resetCount())
        }
        const showMinutes = parseInt(parseInt(seconds)/60)
        const showSeconds = parseInt(seconds) % 60
        return(
            <div id="clock">       
                {(showMinutes < 10) ? `0${showMinutes}` : showMinutes}:{(showSeconds < 10) ? `0${showSeconds}` : showSeconds}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isTimerWorking: state.isTimerWorking,
        seconds: state.seconds,
    }
}

const mapDispatchToProps = { 
    changeSecondsCount,
    resetCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)