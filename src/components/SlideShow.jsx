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
                <div
                key={index}
                className={`slideshow-container ${index === currentIndex ? 'show' : ''}`}
                >
                <img
                    key={index}
                    className={`slideshow-image ${index === currentIndex ? 'show' : ''}`}
                    src={station.pic}
                    alt={station.name}
                   
                />                
            
            {index === currentIndex && (
                        <div className="slideshow-overlay">
                            <h2 className="slideshow-title">{station.name}</h2>
                        </div>
                    )}
                    </div>
            ))}
        </div>
    )
}


