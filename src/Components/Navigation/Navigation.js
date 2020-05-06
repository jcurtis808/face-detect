import React from 'react';
import Logo from '../Logo/Logo.js';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return(
        <div>
          <Logo />
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
          </nav>
        </div>
      );
  } else {
    return(
      <div style={{display: 'flex', justifyContent: 'space-between', verticalAlign: 'middle', paddingTop: '25px'}}>
        <Logo />
        <nav style={{display: 'flex'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
      </div>
    );
  }
}

export default Navigation