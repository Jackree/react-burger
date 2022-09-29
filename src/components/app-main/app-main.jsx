import React from 'react';
import appMainStyles from './app-main.module.css';

function AppMain(props) {
  return (
    <main>
      <div className={appMainStyles.container}>
        {props.children}
      </div>
    </main>
  );
}

export default AppMain;
