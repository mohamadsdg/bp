import React from 'react';
import logo from '../../asset/_icon/logo.svg';
import Style from './index.module.scss';

function App() {
   return (
      <div className={Style.App}>
         <header className={Style.App_header}>
            <img src={logo} className={Style.App_logo} alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className={Style.App_link}
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer">
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
