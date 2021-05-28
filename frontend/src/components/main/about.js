import React from 'react';
import '../css/about.scss'

const About = () => {
  return (
      <div className='about-background'>
          <h4 className='header-about'>
              Flux is a travel planner that solves two common trip challenges; 
              the dates and the destination.
          </h4>
          <p className='about-desc'>
              Imagine this. The pandemic is behind you. You're vaccinated, 
              and so are your friends. It’s time to make up for over one 
              year’s worth of traveling. Where do you start? How do you 
              stay organized? Importantly, how do you agree on a destination 
              when Brad wants to go to the Bahamas and Susan wants to go to 
              the Maldives? The group chat is about to get out of hand.
          </p>
          <h4 className='header-about2'>
              Thankfully, there’s Flux. Here’s how it works:
          </h4>
          <p className='about-desc'>
              Flux lets you initiate a travel plan and invite your friends 
              and family to join. Collaborators can nominate their suggestions 
              and upvote, downvote and comment on others’ suggestions.
          </p>
          <p className='about-desc'>
              By centralizing planning, organizing suggestions and 
              democratizing the selection process, Flux will become your 
              MVP (Most Valuable Planner) in no time. 
          </p>
      </div>
  )
};

export default About;