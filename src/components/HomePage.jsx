import './HomePage.css'
import Destinations from './Destinations'
import BookingPage from './BookingPage'
import {Link, Route, Routes} from 'react-router-dom'
export default function HomePage({stations}) {
    
    
    return (
        <div className='wrapper'>
            <nav className='nav-bar'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact us</Link>
                <Link to='/booking'>Book now</Link>
            </nav>
    
            <section className="header">
                <header>
                    <h1>Travel by Train</h1>
                </header>
            </section>
         
            <section className='main-content'>
                <div>
                    <h1>Destinations</h1>
                    <Destinations stations={stations}/>
                </div>
            </section>
        </div>
    )
}