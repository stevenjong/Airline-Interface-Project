import {useParams} from 'react-router-dom'
import {getOneAircraftTN, updateAircraft} from '../services/api'
import {useState, useEffect} from 'react'

function AircraftDetail() {
    const {tailNumber} = useParams()
    const [aircraft, setAircraft] = useState<any>(null)
    useEffect(() => {
        if(tailNumber){
            getOneAircraftTN(tailNumber).then(response => {
                setAircraft(response.data)
            })
        }
    }, [tailNumber])
    const handleConnected = () => {
        if(tailNumber){
            updateAircraft(tailNumber, !aircraft.connected).then(() => {
                setAircraft({...aircraft, connected: !aircraft.connected, last_connection: !aircraft.connected? new Date().toISOString(): aircraft.last_connection})
            })
        }
    }
    if(!aircraft){
        return(
            <div>Loading!</div>
        )
    }
    return(
        <div>
            <h1>Aircraft Details</h1>
            <div>
                <h2>{aircraft.tail_number}</h2>
                <p>{aircraft.airline}</p>
                <p>{aircraft.model}</p>
                <p>{aircraft.software_ver}</p>
                <p>{aircraft.connected ? 'Connected' : "Disconnected"}</p>
                <button onClick = {() => handleConnected()}>Simulate Connection Change</button>
                <p>{new Date(aircraft.last_connection).toLocaleString()}</p>
            </div>
        </div>
    )
}

export default AircraftDetail