import React, { Component } from 'react';

const Card =({movie})=>
{
    return (
        <div className='card'>
           
           <img src={movie.img.src} alt={movie.img.alt} 
           width='200' className='card-img-top'/>
           <div className='card-body'>

           <h2 className='card-title'>
               #{movie.ranking}   -   {movie.title}   ( {movie.year} )
            </h2>

            <ul className='list-group list-group-flush'>
                <li className='list-group-item'> Distributor : {movie.distributor}</li>
                <li className='list-group-item'> Amount : {movie.amount}</li>
            </ul>


           </div>
        </div>
    );
};

export default Card;