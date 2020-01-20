import React from 'react'
import { Link } from 'react-router-dom'

export const ScoreTable = ({ data }) => {
    return(
        <table className={data.length ? "tableTrue" : "tableFalse"}>
            <thead>
                <tr className="headRow">
                    <th>№</th>
                    <th>Id</th>
                    <th>Task name</th>
                    <th>Start time</th>
                    <th>Stop time</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {data.map(elem => 
                    <tr key={elem.id} className="hoverRows">
                        <td>{data.indexOf(elem) + 1}</td>
                        <td>{elem.id}</td>
                        <td><Link className="itemRoute" to={`/id${elem.id}`}>{elem.name}</Link></td>
                        <td>{(elem.startTime.hours < 10) ? `0${elem.startTime.hours}` : elem.startTime.hours}:{(elem.startTime.minutes < 10) ? `0${elem.startTime.minutes}` : elem.startTime.minutes}</td>
                        <td>{(elem.stopTime.hours < 10) ? `0${elem.stopTime.hours}` : elem.stopTime.hours}:{(elem.stopTime.minutes < 10) ? `0${elem.stopTime.minutes}` : elem.stopTime.minutes}</td>
                        <td>{elem.duration}s</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}