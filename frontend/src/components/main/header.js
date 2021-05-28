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
    const path = this.props.location.pathname;
    let accountButtons;

    if (!currentUser) {
      accountButtons = (
        <>
          <button className='buttons' onClick={this.handleClick}>Sign In</button>
          <button className='buttons' onClick={this.handleClick}>Sign Up</button>
        </>
      )
    } else if (currentUser && path === "/") {
      accountButtons = (
        <>
          <Link to={`/users/${currentUser._id}`}>
            <i className="icons fas fa-user-circle fa-2x"></i>
          </Link>
            <button className='buttons' onClick={this.handleLogout}>Log Out</button>
        </>
      )
    } else if (path.includes("users")) {
      accountButtons = (
      <div>
          <Link to='/plans/create'>
            {/* plus icon for add new trip */}
            <i className="icons fas fa-plus-circle fa-2x"></i>
          </Link>
          <button className='buttons' onClick={this.handleLogout}>Log Out</button>
      </div>
      )
    } else {
      accountButtons = (
        <div>
          <Link to='/plans/create'>
            {/* plus icon for add new trip */}
            <i className="icons fas fa-plus-circle fa-2x"></i>
          </Link>
          <Link to={`/users/${currentUser._id}`}>
            <i className="icons fas fa-user-circle fa-2x"></i>
          </Link>
          <button className='buttons' onClick={this.handleLogout}>Log Out</button>
        </div>
      )
    }

    return (
      <header>
        <div className='header-cont'>
          <div className='left-head'>
            <Link className='logo-link' to="/" ><h1 className='logo'>flux</h1></Link>
          </div>
          <div className='right-head'>
            {/* <div className='dropdown'> */}
            {/* <Link> */}
              {/* <i className="drop-icon icons fas fa-chevron-circle-down fa-2x"></i> */}
              {/* arrow icon to see trips */}
            {/* </Link> */}
              {/* <div className='drop-cont'> */}
                {/* <p>Example1</p> */}
                {/* <p>really long example</p> */}
              {/* </div> */}
            {/* </div> */}

            {accountButtons}
            <Link to='/about'>
              <i class="icons fas fa-question-circle fa-2x"></i>
            </Link>
          </div>

        </div>
      </header >
    )

  }


}


export default Header;