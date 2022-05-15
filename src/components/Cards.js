import React from 'react'

import './Cards.css'
import CardItem from './CardItem'

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Games featuring on MyGameList(MGL)!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="images/rdr2.img" 
              text="Red Dead Redemption 2: You are faced with either taking the path of the honourable man as the era of the Wild West approaches its death or spending your days being as terrible an outlaw can be" 
              label="Adventure" 
              path="/services"
            />
            <CardItem 
              src="images/doom-eternal.webp" 
              text=" Doom Eternal: the latest in the series, is everything that the genre is about, distilled into one, glorious, searing, defiant roar. It’s a force of will." 
              label="Shooter" 
              path="/services"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/witcher3.jpg'
              text='Witcher 3: The Northern Kingdoms, inspired by European mythology, are populated by fascinating creatures and, more importantly, multi-dimensional characters. They’re all flawed, not least protagonist Geralt of Rivia.'
              label='Action RPG'
              path='/services'
            />
            <CardItem
              src='images/hollowknight.jpg'
              text='Hollow Knight: It is an underground labyrinth of secrets: burrow in and you’ll be lost in its lofty caverns, tight tunnels, and beautiful, ruined cities, and you won’t want to find the way out.'
              label='Metroidvania'
              path='/products'
            />
            <CardItem
              src='images/forza.jpg'
              text='Forza Horizon 5: Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.'
              label='Racing'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>      
    </div>
  )
}

export default Cards