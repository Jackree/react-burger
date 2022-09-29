import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Navigation from '../navigation/navigation';
import ProfileLink from '../profile-link/profile-link';
import appHeaderStyles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={`p-4 ${appHeaderStyles.header}`}>
      <div className={appHeaderStyles.container}>
        <Navigation />
        <a className={appHeaderStyles.logo} href>
          <Logo />
        </a>
        <ProfileLink />
      </div>
    </header>
  );
}

export default AppHeader;
