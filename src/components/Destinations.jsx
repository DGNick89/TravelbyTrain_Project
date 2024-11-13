import { useState} from "react"
import './Destinations.css'
import BookingPage from "./BookingPage"
import Slideshow from "./SlideShow"
import {Link, Route, Routes} from 'react-router-dom'

export default function Destinations({stations}, handleSelect) {

    const [selectedStations, setSelectedStations] = useState([])

    function handleSelect(e) {
        setSelectedStations(stations[e.target.value])
    }
 


    return (
        <div className="destinations">
             
             <Slideshow stations={stations} />      
            
            
        </div>
    )
}


