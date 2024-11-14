import { useState } from 'react'
import './SeatSelection.css'
import CheckOutPage from './CheckOutPage'
import { useNavigate } from 'react-router-dom'

export default function SeatSelection({matchingRoute}) {

 
    const navigate = useNavigate()    

    const rows = 15; 
    const colsPerSide = 3; 
    const totalSeats = rows * colsPerSide * 2
    
    
    const initialSeats = Array.from({ length: rows }, () => ({
        left: Array(colsPerSide).fill(false),
        right: Array(colsPerSide).fill(false),
    }));
    
    const [seats, setSeats] = useState(initialSeats);
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [isMaxSelectionReached, setIsMaxSelectionReached] = useState(false);
    
    const maxSelection = 2;
    
    const matchingRouteCopy = { ...matchingRoute }

    function handleCheckout() {
        navigate('/checkout', { state: { matchingRouteCopy }}, { state: [selectedSeats]})
    } 
     

  
    const handleSeatClick = (rowIndex, colIndex, side) => {
      const isSeatSelected = seats[rowIndex][side][colIndex];
      const seatLabel = `Row ${rowIndex + 1} - Seat ${colIndex + 1} (${side})`;
  
      if (!isSeatSelected && selectedCount >= maxSelection) {
        setIsMaxSelectionReached(true);
        return;
      }
  
      const updatedSeats = seats.map((row, rIndex) => {
        if (rIndex === rowIndex) {
          return {
            ...row,
            [side]: row[side].map((seat, cIndex) => {
              if (cIndex === colIndex) {
                return !seat;
              }
              return seat;
            }),
          };
        }
        return row;
      });
  
      let newSelectedSeats;
      if (isSeatSelected) {
        newSelectedSeats = selectedSeats.filter(s => s !== seatLabel);
        setSelectedCount(selectedCount - 1);
        setIsMaxSelectionReached(false);
      } else {
        newSelectedSeats = [...selectedSeats, seatLabel];
        setSelectedCount(selectedCount + 1);
      }
  
      setSeats(updatedSeats);
      setSelectedSeats(newSelectedSeats);
    };
  
    let seatNumber = 1;
    let totalPrice = matchingRoute.price * Number(selectedSeats.length)
    console.log(selectedSeats);

  
    
    return (
      <div>
        <div className="seat-container">
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
             
              <div className="seat-side">
                {row.left.map((seat, colIndex) => (
                  <div
                    key={`left-${colIndex}`}
                    className={`seat ${seat ? 'selected' : 'available'}`}
                    onClick={() => handleSeatClick(rowIndex, colIndex, 'left')}
                  >
                    {seatNumber++}
                  </div>
                ))}
              </div>
              
              <div className="corridor"></div>
              
              <div className="seat-side">
                {row.right.map((seat, colIndex) => (
                  <div
                    key={`right-${colIndex}`}
                    className={`seat ${seat ? 'selected' : 'available'}`}
                    onClick={() => handleSeatClick(rowIndex, colIndex, 'right')}
                  >
                    {seatNumber++}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {isMaxSelectionReached && <p className='warning-message'>You can only select up to {maxSelection} seats.</p>}
        <section className='checkout'>
          <div className='travel-details'>
            <h3>Seat number: {selectedSeats.join(', ')}</h3>
            <h3>From: {matchingRoute.from}</h3>
            <h3>To: {matchingRoute.to}</h3>
            <h3>Price total: {totalPrice}</h3>
          </div>
          <button id='checkout-btn' onClick={handleCheckout}>Go to Checkout!</button>
        </section>
      </div>
    );
}
    





            
        