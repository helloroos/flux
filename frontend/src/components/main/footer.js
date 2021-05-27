import React from 'react';
import '../css/footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='footer-cont'>
        <p className='foot-desc'>
          Flux allows you to connect with your friends and upvote/downvote
          trip suggestions (complete with dates, destination, accommodation and 
          activities). Once you've decided on a trip you can stay organized with
          your logistics. 
        </p>
        <div className='teammates'>
          <p>Evan Leon</p>
          <p>Michelle Roos</p>
          <p>Jessica Uphoff</p>
          <p>Syldys Khomushku</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;