import { useState } from 'react'
import './SeatSelection.css'
import CheckOutPage from './CheckOutPage'
import {Link, Route, Routes} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function SeatSelection({matchingRoute}) {

    const [tickets, setTickets] = useState(false)
    const [cart, setCart] = useState([])
    const [numberOfSeats, setNumberOfSeats] = useState('')
    const [seatNumbers, setSeatNumbers] = useState([])
    const [checkout, setCheckout] = useState(false)
    const navigate = useNavigate()

    function handleSeats(e) {
        setTickets(true)
        setNumberOfSeats(e.target.value)
        setSeatNumbers(new Array(parseInt(e.target.value) || 0).fill(''))
    }

    const matchingRouteCopy = { ...matchingRoute }
    console.log(matchingRouteCopy);
    
    function handleCheckout() {
        setCart(matchingRouteCopy)
        navigate('/checkout', { state: { matchingRouteCopy }})
    }

    const seatInputs = [];
    for (let i = 0; i < Number(numberOfSeats); i++) {
        seatInputs.push(
            <div key={i}>
                <label htmlFor={`seat-${i + 1}`}>Seat {i + 1} number:</label>
                <input 
                    type="number" 
                    id={`seat-${i + 1}`} 
                    min="1" max="108"  
                    value={seatNumbers[i] || ''}
                    onChange={(e) => handleSeatNumberChange(i, e.target.value)}  />
            </div>
        )
    }
    
    function handleSeatNumberChange(index, value) {
        const updatedSeatNumbers = [...seatNumbers];
        updatedSeatNumbers[index] = value;
        setSeatNumbers(updatedSeatNumbers);
        
    }
            

    return (
        <div>
            <h1>Select your seats</h1>
            <h2>How many tickets?</h2>
            <select onChange={handleSeats} name="seat-count" value={numberOfSeats}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <p>MAX 3 TICKETS PER PURCHASE</p>

            {tickets && numberOfSeats ? (
                <div>
                    <h2>Please, select your seat number(s)</h2>
                    {seatInputs} {}
                    <button className="cart-btn">Add to cart</button>
                </div>) : ( '' )}
            <div className='seat-selection'>            
               
            </div>
            <section className='checkout'>
                <div className='travel-details'>
                    <h3>Seat Number: {seatNumbers.filter(Boolean).join(', ')} </h3>
                    <h3>From: {matchingRoute.from}</h3>
                    <h3>To: {matchingRoute.to}</h3>
                </div>
                <button id='checkout-btn' onClick={handleCheckout}>Go to Checkout!</button>
            </section>

            
        </div>
    )
} 