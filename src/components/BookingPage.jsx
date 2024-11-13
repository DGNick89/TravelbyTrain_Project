import { useState } from 'react'
import SeatSelection from './SeatSelection'
import './BookingPage.css'

export default function BookingPage({stations}) {

    const [selectedFrom, setSelectedFrom] = useState('')
    const [selectedTo, setSelectedTo] = useState('')
    const [showSeats, setShowSeats] = useState(false)
    const [route, setRoute] = useState([])

    const [trainRoutes, setTrainRoutes] = useState([
        {
            from: 'Sydney',
            to: 'Melbourne', 
            distance: '900km', 
            duration: '11hrs', 
            price: '$94'
        },
        {
            from: 'Melbourne',
            to: 'Brisbane',
            distance: '1700km',
            duration: '20hrs',
            price: '$150',
        },
        {
            from: 'Brisbane',
            to: 'Gold Coast',
            distance: '80km',
            duration: '2hrs',
            price: '$20',
        },
        {
            from: 'Brisbane',
            to: 'Canberra',
            distance: '1150km',
            duration: '14hrs',
            price: '$130',
        },
        {
            from: 'Sydney',
            to: 'Canberra',
            distance: '290km',
            duration: '4hrs',
            price: '$50',
        },
        {
            from: 'Melbourne',
            to: 'Perth',
            distance: '3400km',
            duration: '72hrs',
            price: '$500',
        },
        {
            from: 'Perth',
            to: 'Darwin',
            distance: '3000km',
            duration: '40hrs',
            price: '$450',
        },
        {
            from: 'Darwin',
            to: 'Alice Springs',
            distance: '1500km',
            duration: '24hrs',
            price: '$200',
        },
        {
            from: 'Alice Springs',
            to: 'Sydney',
            distance: '1600km',
            duration: '18hrs',
            price: '$220',
        }
    ])

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
    let noRoutes = ''
    if (!matchingRoute) {
        noRoutes = `No routes found from ${selectedFrom} to ${selectedTo}`
    }

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
                        <h3>From: <br/>{matchingRoute.from}</h3>
                        <h3>To: <br/>{matchingRoute.to}</h3>
                        <h3>Distance: <br/>{matchingRoute.distance}</h3>
                        <h3>Duration: <br/>{matchingRoute.duration}</h3>
                        <h3>Price: <br/>{matchingRoute.price}</h3>
                        <button onClick={handleClick}>Select seats</button> 
                    </div>
                    ) : (
                    <div>
                        <p>{noRoutes}</p>
                    </div>
                    )}
                    <div>
                        {showSeats ? <SeatSelection matchingRoute={matchingRoute} /> : ''}
                    </div>

                </div>
            </div>
        )
    }