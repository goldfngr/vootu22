import React, { Component } from 'react';
import CardItem from './CardItem';
import './Cards.css';
import IMAGES from './images.js';



function Cards() {
    return (
        <div className="cards">

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items"> 
                        <CardItem
                        src='img-9.jpg'
                        text='Reducing your electricity consumption and lowering operating expenses are always guaranteed by Vootu. '
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='img-2.jpg'
                        text='30% of your electricity usage is currently being wasted, but where?'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items"> 
                        <CardItem
                        src='img-3.jpg'
                        text='Cillum dolore eu fugiat nulla pariatur ipsum dolor sit'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem
                        src='img-4.jpg'
                        text='Vootu&lsquo;s proprietary E-TRAQ energy monitoring system evaluates all areas of energy usage'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='img-8.jpg'
                        text='Energy prices continue to rise at a national average of 4.8% year, waste and inefficiencies are expensive problems to have.'
                        label='Thrills'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Cards
