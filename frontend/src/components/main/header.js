import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.scss';


class Header extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleClick(e) {
    debugger
    // e.preventDefault();
    let target = e.currentTarget.innerHTML
    this.props.openModal(target)
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }


  render() {
    let { currentUser } = this.props;
    let accountButton;

    if (!currentUser) {
      accountButton = (
        <div>
          <button className='buttons' onClick={this.handleClick}>Sign Up</button>
          <button className='buttons' onClick={this.handleClick}>Sign In</button>
        </div>
      )
    } else {
      accountButton = (
        <div>
          {/* <i className="icons fas fa-user-circle"></i>
          <div className='account-drop'> */}
            <button className='buttons' onClick={this.handleLogout}>Log Out</button>
          {/* </div> */}
        </div>
      )
    }
      

            
            

    return (
      <header>
        <div className='header-cont'>
          <div className='left-head'>
            {/* <img className='logo'></img> */}
          </div>
          <div className='right-head'>
            {/* <Link> */}
              <i className="icons fas fa-plus-circle fa-2x"></i>
              {/* plus icon for add new trip */}
            {/* </Link> */}
            <div className='dropdown'>
            {/* <Link> */}
              <i className="drop-icon icons fas fa-chevron-circle-down fa-2x"></i>
              {/* arrow icon to see trips */}
            {/* </Link> */}
              <div className='drop-cont'>
                <p>Example1</p>
                <p>really long example</p>
                <p>Example3</p>
              </div>
            </div>

            {accountButton}
          </div>

        </div>
      </header >
    )

  }


}


export default Header;