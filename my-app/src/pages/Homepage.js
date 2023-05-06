import React from 'react'
import { useState } from "react"
import { useEffect } from 'react'
import './homepage.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'


function Homepage() {

    const [records, setRecords] = useState([])

    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    },[])
  return (
    <>
    <Navbar/>
    <div className='movies'>
        
        {records.map((list)=>{
            return(
                <div className='movie_container'>
                    
                    <img src = {list.show.image != null ? list.show.image.medium : null} alt="show image" className='show_image'/>
                    <p>rating: {list.show.rating.average}</p>
                    <h4>{list.show.name}</h4>
                    <button type="button" class="btn btn-secondary">+ Watchlist</button>
                    <Link to ='details' state={{list: list}}><button type="button" class="btn btn-secondary">Details</button></Link>
                       
                </div>
            )
            
        })}
        
        
      
    </div>
    </>
  )
}

export default Homepage
