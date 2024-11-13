import { useState, useEffect } from "react"
import './SlideShow.css'

export default function Slideshow({ stations }) {


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % stations.length);
        }, 3000)

        return () => clearInterval(interval)
    }, [stations.length]);

    return (
        <div className="slideshow">
            {stations.map((station, index) => (
                <img
                    key={index}
                    className={`slideshow-image ${index === currentIndex ? 'show' : ''}`}
                    src={station.pic}
                   
                />                
            ))}
            {/* <h2>{stations[currentIndex].name}</h2> */}
        </div>
    )
}


