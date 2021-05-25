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
        <ul className='teammates'>
          <li>Michelle Roos</li>
          <li>Jessica Uphoff</li>
          <li>Evan Leon</li>
          <li>Syldys Khomushku</li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;