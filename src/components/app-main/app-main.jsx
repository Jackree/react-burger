import React from 'react';
import appMainStyles from './app-main.module.css';

function AppMain({ children }) {
  return (
    <main>
      <div className={appMainStyles.container}>{children}</div>
    </main>
  );
}

export default AppMain;
