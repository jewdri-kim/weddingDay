import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
  return (
      
    <header className="app-header">
        <div className="app-nav">
            <div className="nav-menus">
                <h1 className="nav-brand">
                    <a className="nav-brand-logo" href="/"> Wedding Day </a>
                </h1>
                <button type="button" className="btn-theme" onClick={()=>props.setTheme(props.theme === 'dark'? 'light' : 'dark')}><span>모드</span></button>
            </div>
        </div>
    </header>
  );
};


Header.defaultProps = {
}

Header.propTypes = {
  theme : PropTypes.string,
  //setTheme : PropTypes.
}
export default Header;
