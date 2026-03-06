import {useState, useEffect} from 'react'
import {getDistribution} from '../services/api'
import {Link} from 'react-router-dom'

function DistributionManager(){
    const [distribution, setDistribution] = useState<any[]>([]);
    useEffect(() => {
        getDistribution().then(response => {
            setDistribution(response.data)
        })
    }, [])
    return(
        <div>
            <h1> Distributions </h1>
            {distribution.map(distributionvar => (
                <div key = {distributionvar.id}>
                    <Link to = {`/distribution/${distributionvar.aircraft_id}/${distributionvar.content_id}`}>
                        <h2>{distributionvar.id}</h2>
                    </Link>
                    <p>{distributionvar.aircraft_id}</p>
                    <p>{distributionvar.content_id}</p>
                    <p>{new Date(distributionvar.scheduled_date).toLocaleString()}</p>
                    <p>{distributionvar.statusvar}</p>
                </div>
            ))}
        </div>
    )
}

export default DistributionManager
