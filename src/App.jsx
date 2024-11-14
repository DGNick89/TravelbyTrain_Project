import HomePage from './components/HomePage'
import Destinations from './components/Destinations'
import BookingPage from './components/BookingPage'
import CheckOutPage from './components/CheckOutPage'
import './App.css'
import { useState } from "react"
import {Link, Route, Routes} from 'react-router-dom'
import SideNav from './components/SideNav'
import TrainRoutes from './components/TrainRoutes'

function App() {
 
  const [stations, setStations] = useState([
    {name:'Sydney', details:'Sydney, capital of New South Wales and one of Australias largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.', pic:'https://media.timeout.com/images/106087711/image.jpg'}, 
    {name:'Melbourne', details:'Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the citys centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River. ', pic:'https://images.gostudy.com.au/w:1400/h:800/q:mauto/f:best/ig:avif/id:540b3df95df432705aa5e6c1a8de15ca/https://www.gostudy.com.au/MEL_header_2-1.jpg'}, 
    {name:'Gold Coast', details:'The Gold Coast is a metropolitan region south of Brisbane on Australia’s east coast. Its famed for its long sandy beaches, surfing spots and elaborate system of inland canals and waterways.', pic:'https://lp-cms-production.imgix.net/2024-09/shutterstockRF550879138-d5b90d9affbb.jpg'}, 
    {name:'Brisbane', details:'Brisbane, capital of Queensland, is a large city on the Brisbane River. Clustered in its South Bank cultural precinct are the Queensland Museum and Sciencentre, with noted interactive exhibitions. ', pic:'https://www.forbes.com.au/wp-content/uploads/2024/05/Brisbane-aerial.jpg?w=1024'}, 
    {name:'Adelaide', details:'Adelaide is South Australia’s cosmopolitan coastal capital. Its ring of parkland on the River Torrens is home to renowned museums such as the Art Gallery of South Australia, displaying expansive collections including noted Indigenous art, and the South Australian Museum, devoted to natural history.', pic:'https://www.colliers.com.au/-/media/images/colliers/anz/australia/research/1536x1040-research-heroes/2023/adelaide_1536x1040.ashx?bid=47f3c7ba895e4e518787207108dc2a68'}, 
    {name:'Canberra', details:'Canberra is Australia’s capital, inland from the countrys southeast coast. Surrounded by forest, farmland and nature reserves, it earns its nickname, the "Bush Capital.” The citys focal point is Lake Burley Griffin, filled with sailboats and kayaks.', pic:'https://cdn.britannica.com/09/140809-050-53529B3C/Old-Parliament-House-steps-Australian-National-War.jpg'}, 
    {name:'Perth', details:'Perth, capital of Western Australia, sits where the Swan River meets the southwest coast. Sandy beaches line its suburbs, and the huge, riverside Kings Park and Botanic Garden on Mount Eliza offer sweeping views of the city.', pic:'https://thesouthwestedge.com.au/wp-content/uploads/2020/04/Perth_Elizabeth-Quay_-Day-scaled.jpg'}, 
    {name:'Darwin', details:'Darwin is the capital of Australias Northern Territory and a former frontier outpost. Its also a gateway to massive Kakadu National Park. Its popular waterfront area has several beaches and green areas like Bicentennial Park.', pic:'https://northernterritoryresources.com.au/__data/assets/image/0004/1347745/Hero_Darwin-lighter.jpg'}, 
    {name:'Alice Springs', details:'Alice Springs is a remote town in Australia’s Northern Territory, halfway between Darwin and Adelaide, both 1,500km away. It’s a popular gateway for exploring the Red Centre, the countrys interior desert region.', pic:'https://www.journeybeyondrail.com.au/wp-content/uploads/2023/11/Alice-Springs-Town.jpg'}])

    const [trainRoutes, setTrainRoutes] = useState([
      {
          from: 'Sydney',
          to: 'Melbourne', 
          distance: '900km', 
          duration: '11hrs', 
          price: 94,
      },
      {
          from: 'Melbourne',
          to: 'Brisbane',
          distance: '1700km',
          duration: '20hrs',
          price: 150,
      },
      {
          from: 'Brisbane',
          to: 'Gold Coast',
          distance: '80km',
          duration: '2hrs',
          price: 20,
      },
      {
          from: 'Brisbane',
          to: 'Canberra',
          distance: '1150km',
          duration: '14hrs',
          price: 130,
      },
      {
          from: 'Sydney',
          to: 'Canberra',
          distance: '290km',
          duration: '4hrs',
          price: 50,
      },
      {
          from: 'Melbourne',
          to: 'Perth',
          distance: '3400km',
          duration: '72hrs',
          price: 500,
      },
      {
          from: 'Perth',
          to: 'Darwin',
          distance: '3000km',
          duration: '40hrs',
          price: 450,
      },
      {
          from: 'Darwin',
          to: 'Alice Springs',
          distance: '1500km',
          duration: '24hrs',
          price: 200,
      },
      {
          from: 'Alice Springs',
          to: 'Sydney',
          distance: '1600km',
          duration: '18hrs',
          price: 220,
      }
  ])

    
    const [wid, setWid] = useState('0%')

    const openSidenav = ( ) => {
      setWid('15%')
    }
  
    const closeSidenav = ( ) => {
      setWid('0%')
    }
   



  return (
    <>
      <header style={{ marginLeft: wid, transition: 'margin-left 0.5s ease' }}>
        <h1>Travel by Train</h1>
        <button className='open-btn' onClick={openSidenav}>☰</button>
      </header>

      
        <SideNav width={wid} closeNav={closeSidenav}/>

      <main style={{ marginLeft: wid, transition: 'margin-left 0.5s ease' }}>

        <Routes>
          <Route path='/trainroutes' element={<TrainRoutes trainRoutes={trainRoutes}/>} />
          <Route path='/' element={<HomePage stations={stations}/>} />
          <Route path='/booking' element={<BookingPage stations={stations} trainRoutes={trainRoutes} />} />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>

      </main>
      <footer>
        <div className='footer'></div>
      </footer>
    </>
  )
}

export default App
