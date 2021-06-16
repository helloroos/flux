import React from 'react';
import '../css/footer.scss'

class Footer extends React.Component {
 

  render() {
    let { currentUser } = this.props;
    let { path } = this.props;
    let description;

    if (!currentUser && path === "/") {
      description = (
        <p className='foot-desc'>
          Traveling with friends or family can be amazing. What’s not so fun?
          Figuring out the travel logistics. Whether you’re planning a weekend
          trip, bachelorette party or family reunion, Flux helps you get on
          the same page using smart organizing and polling to plan the
          perfect getaway.
        </p>
      )
      } else {
        description = (
          <p className='foot-desc'>
          </p>
        )
      }

    return (
      <footer>
        <div className='footer-cont'>
          {description}
          <div className='teammates'>
            <div className='member'>
              {/* <a href='' className='link' target="_blank">
                <i className="social-icons fab fa-linkedin"></i>
              </a>
              <a href='https://github.com/helloroos' className='link' target="_blank">
                <i className="social-icons fab fa-github"></i>
              </a> */}
              <p>Michelle Roos</p>
            </div>

            <div className='member'>
              <a href='https://www.linkedin.com/in/evan-leon-737918211/' rel="noreferrer" className='link' target="_blank">
                <i className="social-icons fab fa-linkedin"></i>
              </a>
              <a href="https://www.github.com/Evan-Leon" rel="noreferrer" className='link' target="_blank">
                <i className="social-icons fab fa-github"></i>
              </a>
              <p>Evan Leon</p>
            </div>

            <div className='member'>
              <a href='https://www.linkedin.com/in/jessica-uphoff-b2584b69/' rel="noreferrer" className='link' target="_blank">
                <i className="social-icons fab fa-linkedin"></i>
              </a>
              <a href='https://github.com/jessicaUP' className='link' rel="noreferrer" target="_blank">
                <i className="social-icons fab fa-github"></i>
              </a>
              <p>Jessica Uphoff</p>
            </div>
            <div className='member'>
              <a href='https://www.linkedin.com/in/syldysvkhomushku/' rel="noreferrer" className='link' target="_blank">
                <i className="social-icons fab fa-linkedin"></i>
              </a>
              <a href='https://github.com/syldysnya' className='link' rel="noreferrer" target="_blank">
                <i className="social-icons fab fa-github"></i>
              </a>
              <p>Syldys Khomushku</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
};

export default Footer;