import './TrainRoutes.css'

export default function TrainRoutes({trainRoutes}) {
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
                    <h2>{routes.price}</h2>
                    <button>book now</button>
                </div>
            ))}

        </div>
    )
}