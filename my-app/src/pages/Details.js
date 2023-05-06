import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import './details.css'
import { Link } from 'react-router-dom'

function Details() {
    const list = useLocation().state.list;
  return (
    <>
     <Navbar/>
    <div className='details_container'>
       
        <div className='details'>

            <div className='heading'>
                <h1>{list.show.name}</h1>
                <p>premiered: {list.show.premiered}</p>
            </div>
            
            
            <img src = {list.show.image != null ? list.show.image.medium : null} alt="show image" className='details_image'/>
           
            <div>
            {list.show.genres.map((genre)=>{
                        return( 
                            <div className='genres'>{genre},</div>
                        )   
                })}
                <p className='details_rating'>rating: {list.show.rating.average}</p>
            </div>
            
            

            
            
            <div className='summary'>{list.show.summary}</div>
            <div className='details_button'>
            <Link to='/form' state={{list: list}}><button type="button" class="btn btn-light">Book Show</button></Link>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Details
