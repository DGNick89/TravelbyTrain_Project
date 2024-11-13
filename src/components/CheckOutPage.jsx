import { useLocation } from 'react-router-dom'
import './CheckOutPage.css'
import { useState } from 'react'



export default function CheckOutPage({}) {
    const location = useLocation()
    const matchingRouteCopy = location.state?.matchingRouteCopy
    
    const [payment, setPayment] = useState(false)
    

    const [details, setDetails] = useState({
        name: '',
        email: '',
        phone: ''})

    function handleDetails(e) {
        const {name, value} = e.target
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,}))
    }
    
    function handleClick() {
        setPayment(true)
    }


    return (
        <div>
            <div className="customer-details">
                <h2>Please enter your details:</h2>
                <h2>Full name: </h2>
                <input onChange={handleDetails} required name='name' type="text" value={details.name} />
                <h2>email</h2>
                <input onChange={handleDetails} required name='email' type="email" value={details.email} />
                <h2>phone number</h2>
                <input onChange={handleDetails} required name='phone' type='text' value={details.phone} />
                <h2>payment method</h2>
                <select name="" id="">
                    <option value=""></option>
                    <option value="">card</option>
                    <option value="">cash</option>
                </select>
                <button onClick={handleClick} className='pay-btn'>PAY</button>                
                
            </div>
            {payment ? (
            <section className='ticket'>
                <div className='trip-details'>
                    <h3><span>From:</span> {matchingRouteCopy.from}</h3>
                    <h3><span>To:</span> {matchingRouteCopy.to}</h3>
                    <h3><span>Distance:</span> {matchingRouteCopy.distance}</h3>
                    <h3><span>Duration:</span> {matchingRouteCopy.duration}</h3>
                </div>
                <div>
                    <h3><span>Name:</span> {details.name}</h3>
                    <h3><span>email:</span> {details.email}</h3>
                    <h3><span>Phone number:</span> {details.phone}</h3>
                </div>
            </section> ) : ('') }
        </div>
        )
}