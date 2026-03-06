import {useState, useEffect} from 'react'
import {getAircrafts} from '../services/api'
import {Link} from 'react-router-dom'

function Dashboard(){
    const [aircraft, setAircraft] = useState<any[]>([]);
    useEffect(() => {
        getAircrafts().then(response => {
            setAircraft(response.data)
        })
    }, [])
    return(
        <div>
            <h1> Aircraft Dashboard </h1>
            {aircraft.map(aircraftvar => (
                <div key = {aircraftvar.id}>
                    <Link to = {`/aircraft/${aircraftvar.tail_number}`}>
                        <h2>{aircraftvar.tail_number}</h2>
                    </Link>
                    <p>{aircraftvar.airline}</p>
                    <p>{aircraftvar.model}</p>
                    <p>{aircraftvar.software_ver}</p>
                    <p>{aircraftvar.connected ? 'Connected' : 'Disconnected'}</p>
                    <p>{new Date(aircraftvar.last_connection).toLocaleString()}</p>
                </div>
            ))}
        </div>
    )
}

export default Dashboard
