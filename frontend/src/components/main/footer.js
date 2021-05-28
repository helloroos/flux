// import React from 'react';
// import '../css/footer.scss'

// const Footer = () => {
//   return (
//     <footer>
//       <div className='footer-cont'>
//         <p className='foot-desc'>
//           Traveling with friends or family can be amazing. What’s not so fun? 
//           Figuring out the travel logistics. Whether you’re planning a weekend 
//           trip, bachelorette party or family reunion, Flux helps you get on 
//           the same page using smart organizing and polling to plan the 
//           perfect getaway.
//         </p>
//         <div className='teammates'>
//           <p>Evan Leon</p>
//           <p>Michelle Roos</p>
//           <p>Jessica Uphoff</p>
//           <p>Syldys Khomushku</p>
//         </div>
//       </div>
//     </footer>
//   )
// };

// export default Footer;

import React from 'react';
import '../css/footer.scss'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { currentUser } = this.props;
    let { path } = this.props;
    let footerObjects;

    if (!currentUser && path == "/") {
    // if (!currentUser) {
      footerObjects = (
        <div className='footer-cont'>
          <p className='foot-desc'>
            Traveling with friends or family can be amazing. What’s not so fun?
            Figuring out the travel logistics. Whether you’re planning a weekend
            trip, bachelorette party or family reunion, Flux helps you get on
            the same page using smart organizing and polling to plan the
            perfect getaway.
      </p>
          <div className='teammates'>
            <p>Evan Leon 
              <a className="our-links" target="_blank" href={"http://.google.com"}><i class="fa fa-linkedin" aria-hidden="true"></i></a> 
              <a className="our-links" target="_blank" href={"http://.google.com"}><i class="fab fa-github"></i></a>               
            </p>
            <p>Michelle Roos</p>
            <p>Jessica Uphoff</p>
            <p>Syldys Khomushku</p>
          </div>
        </div>
      )
      // } else if () {
      } else {
      footerObjects = (
        <div className='footer-cont'>
          <p className='foot-desc'>
      </p>
          <div className='teammates'>
            <p>Evan Leon</p>
            <p>Michelle Roos</p>
            <p>Jessica Uphoff</p>
            <p>Syldys Khomushku</p>
          </div>
        </div>

      )
    }

    return (
      <footer>
        {footerObjects}
      </footer>
    )
  }
};

export default Footer;