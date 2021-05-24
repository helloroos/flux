import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
    let field = e.target.innerHTML
    this.props.openModel(field)
  }


  render() {
    let { currentUser } = this.props;
    let accountButton;

    return (
      <header>
        <div className='left-head'>
          <img className='logo'></img>
        </div>
        <div className='right-head'>
          <Link to=''>
            <i className="fas fa-plus-circle"></i>
            {/* plus icon for add new trip */}
          </Link>




          {/* {accountButton} */}


        </div>


      </header >
    )

  }


}

const Header = () => {



  // if (current_user) {
  //   accountButton = <i className="fas fa-user-circle"></i>
  // } // need to link to the login/signup modal


  
};

export default Header;