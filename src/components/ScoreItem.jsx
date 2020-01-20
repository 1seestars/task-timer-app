import React from 'react'
import { connect } from 'react-redux'

const ScoreItem = ( {doneTasks, match: {params: {id}}} ) => {
    const elem = doneTasks.find(elem => `id${elem.id}` === id)
    if(elem){
        return(
            <table className="tableTrue">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task name</th>
                        <th>Start time</th>
                        <th>Stop time</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{elem.id}</td>
                        <td>{elem.name}</td>
                        <td>{elem.startTime.hours < 10 ? `0${elem.startTime.hours}` : elem.startTime.hours}:{elem.startTime.minutes < 10 ? `0${elem.startTime.minutes}` : elem.startTime.minutes}</td>
                        <td>{elem.stopTime.hours < 10 ? `0${elem.stopTime.hours}` : elem.stopTime.hours}:{elem.stopTime.minutes < 10 ? `0${elem.stopTime.minutes}` : elem.stopTime.minutes}</td>
                        <td>{elem.duration}s</td>
                    </tr>
                </tbody>
            </table>
        )
    } else return(
        <>
            <div id="error">404 Not Found :(</div>
            <hr/>
        </>
    )
    
}

const mapStateToProps = state => {
    return {
        doneTasks: state.doneTasks
    }
}

export default connect(mapStateToProps)(ScoreItem)