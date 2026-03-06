import {useParams} from 'react-router-dom'
import {getOneDistribution, changeStatusDistribution, scheduleOneDistribution} from '../services/api'
import {useEffect, useState} from 'react'

function DistributionDetail(){
    const {aircraftId, contentId} = useParams()
    const [distribution, setDistribution] = useState <any>(null)
    const [newStatus, setNewStatus] = useState <string>('')
    const [newDate, setNewDate] = useState <string>('')
    useEffect(() => {
        if(aircraftId && contentId){
            getOneDistribution(Number(aircraftId), Number(contentId)).then(response => {
                setDistribution(response.data)
            })
        }
    }, [aircraftId, contentId])
    const handleStatus = () => {
        if(aircraftId && contentId){
            changeStatusDistribution(Number(aircraftId), Number(contentId), newStatus).then(() => {
                setDistribution({...distribution, status: newStatus})
            })
        }
    }
    const handleDate = () => {
        if(aircraftId && contentId){
            scheduleOneDistribution(Number(aircraftId), Number(contentId), newDate).then(() => {
                setDistribution({...distribution, scheduled_date: newDate})
            })
        }
    }
    if(!distribution){
        return(
            <div>Loading!</div>
        )
    }
    return(
        <div>
            <h1>Distribution Details</h1>
            <div>
                <h2>{distribution.id}</h2>
                <p>{distribution.aircraft_id}</p>
                <p>{distribution.content_id}</p>
                <p>{new Date(distribution.scheduled_date).toLocaleString()}</p>
                <input type = 'datetime-local' onChange = {(e) => setNewDate(e.target.value)} />
                <button onClick = {handleDate}>Schedule Date</button>
                <p>{distribution.status}</p>
                <select onChange = {(e) => setNewStatus(e.target.value)}>
                    <option value = 'pending'>Pending</option>
                    <option value = 'completed'>Completed</option>
                    <option value = 'cancelled'>Cancelled</option>
                </select>
                <button onClick = {handleStatus}>Update Status</button>
            </div>
        </div>
    )
}

export default DistributionDetail