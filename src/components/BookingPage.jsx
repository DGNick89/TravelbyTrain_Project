import { useState } from 'react'
import SeatSelection from './SeatSelection'
import './BookingPage.css'

export default function BookingPage({stations, trainRoutes}) {

    const [selectedFrom, setSelectedFrom] = useState('')
    const [selectedTo, setSelectedTo] = useState('')
    const [showSeats, setShowSeats] = useState(false)
    const [route, setRoute] = useState([])

   

    function handleTrainRoute(e) {
        e.preventDefault()
        const {name, value} = e.target
        if (name === 'from') {
            setSelectedFrom(value)
        } else if (name === 'to') {
            setSelectedTo(value)
        }
    }

    const matchingRoute = trainRoutes.find(
        (route, idx) => route.from === selectedFrom && route.to === selectedTo)


    let noRoutes = `No routes found from ${selectedFrom} to ${selectedTo}`
   

    function handleClick() {
        setShowSeats(true)     
        setRoute(matchingRoute)
    }

    
    

        return(
            <div>
                <div className="destination-div">
                    <h2>From: <select onChange={handleTrainRoute} name="from" value={selectedFrom} id="">
                                <option value=""></option>
                        {stations.map((station, idx) => (
                            
                            <option key={idx} value={station.name}>{station.name}</option>
                            
                        ))}
                    </select></h2>
                    <h2>To: <select onChange={handleTrainRoute} name="to" value={selectedTo} id="">
                        <option value=""></option>
                    {stations.map((station, idx) => (
                        
                        <option key={idx} value={station.name}>{station.name}</option>
                        
                    ))}
                    </select></h2>
                </div>
                <div>
                    
                    {matchingRoute ? (
                    <div className='train-route'>
                        <h3><span>From:</span> <br/>{matchingRoute.from}</h3>
                        <h3><span>To:</span> <br/>{matchingRoute.to}</h3>
                        <h3><span>Distance:</span> <br/>{matchingRoute.distance}</h3>
                        <h3><span>Duration:</span> <br/>{matchingRoute.duration}</h3>
                        <h3><span>Price:</span> <br/>{`$${matchingRoute.price}`}</h3>
                        <button onClick={handleClick}>Select seats</button> 
                    </div>
                    ) : (
                    <div>
                        <p className='no-routes'>{!matchingRoute ? noRoutes : ''}</p>
                    </div>
                    )}
                    <div>
                        {showSeats ? <SeatSelection matchingRoute={matchingRoute} /> : ''}
                    </div>

                </div>
            </div>
        )
    }