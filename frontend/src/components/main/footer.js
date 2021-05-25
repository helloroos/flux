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
          <h5>Michelle Roos</h5>
          <h5>Jessica Uphoff</h5>
          <h5>Evan Leon</h5>
          <h5>Syldys Khomushku</h5>
        </div>
      </div>
    </footer>
  )
};

export default Footer;