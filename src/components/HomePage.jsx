import './HomePage.css'
import Destinations from './Destinations'
import BookingPage from './BookingPage'
import {Link, Route, Routes} from 'react-router-dom'
export default function HomePage({stations}) {
    
    
    return (
        <div className='wrapper'>
                     
            <section className='main-content'>
                <div>
                    <h1>Our Destinations</h1>
                    <Destinations stations={stations}/>
                </div>
            </section>
        </div>
    )
}