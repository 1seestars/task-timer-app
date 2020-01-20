import React from 'react'

export const Timer = ({ isTimerWorking, seconds, changeSecondsCount, resetCount }) => {
    if(isTimerWorking){
        // setTimeout(() => changeSecondsCount(), 1)
        setTimeout(() => changeSecondsCount(), 1000)
    } else {
        setTimeout(() => resetCount(), 1)
    }

    const showMinutes = parseInt(parseInt(seconds)/60)
    const showSeconds = parseInt(seconds) % 60

    return(
        <div id="clock">       
            {(showMinutes < 10) ? `0${showMinutes}` : showMinutes}:{(showSeconds < 10) ? `0${showSeconds}` : showSeconds}
        </div>
    )
}