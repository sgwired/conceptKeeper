import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ConceptContext from '../../context/concept/conceptContext';
function Navbar({ title, icon }) {
  const authContext = useContext(AuthContext);

  const conceptContext = useContext(ConceptContext);

  const { isAuthenticated, logout, user } = authContext;

  const { clearConcepts } = conceptContext;

  const onLogout = () => {
    logout();
    clearConcepts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guessLinks = (
    <Fragment>
      <li>
        <Link to='/about'> About</Link>
      </li>
      <li>
        <Link to='/register'> Register</Link>
      </li>
      <li>
        <Link to='/login'> Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guessLinks}</ul>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'ConceptTracker',
  icon: 'fas fa-id-card-alt',
};
export default Navbar;
