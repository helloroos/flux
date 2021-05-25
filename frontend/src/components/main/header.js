import React from 'react';
import { Link } from 'react-router-dom';


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
          <button onClick={this.handleClick}>Sign Up</button>
          <button onClick={this.handleClick}>Sign In</button>
        </div>
      )
    } else {
      accountButton = (
        <div>
          <i className="fas fa-user-circle"></i>
          <div className='account-drop'>
            <ul>
              <li>
                {/* <Link> */}
                <button>Account</button>
                {/* </Link> */}
              </li>
              <li>
                <button className='nav-button' onClick={this.handleLogout}>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      )
    }
      

            
            

    return (
      <header>
        <div className='left-head'>
          {/* <img className='logo'></img> */}
        </div>
        <div className='right-head'>
          {/* <Link> */}
            <i className="fas fa-plus-circle"></i>
            {/* plus icon for add new trip */}
          {/* </Link> */}
          {accountButton}
        </div>


      </header >
    )

  }


}


export default Header;