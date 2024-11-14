import { useState } from 'react'
import './TrainRoutes.css'
import BookingPage from './BookingPage'
import SeatSelection from './SeatSelection'

export default function TrainRoutes({trainRoutes}) {

    const [route, setRoute] = useState([])
    const [selected, setSelected] = useState(false)

    function handleClick(idx) {
        let newTrainRoute = trainRoutes[idx]
        setRoute(...route, newTrainRoute)
        setSelected(true)
        
    }
    
    

    return (
        <div className="routes">
            <div className='routes-header'>
                <h3>From</h3>
                <h3>To</h3>
                <h3>Distance</h3>
                <h3>Duration</h3>
                <h3>Price</h3>  
            </div> 
            {trainRoutes.map((routes, idx) => (
                <div className='train-routes' key={idx}>
                    <h2>{routes.from}</h2>
                    <h2>{routes.to}</h2>
                    <h2>{routes.distance}</h2>
                    <h2>{routes.duration}</h2>
                    <h2>{`$${routes.price}`}</h2>
                    <button onClick={() => handleClick(idx)}>book now</button>
                </div>
            ))}

            <div>
                {selected ? <SeatSelection matchingRoute={route} /> : ''}
            </div>

        </div>
    )
}