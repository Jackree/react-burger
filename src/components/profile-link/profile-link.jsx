import React from 'react';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import profileLinkStyles from './profile-link.module.css';

function ProfileLink() {
  return (
    <a
      className={`text text_type_main-default pt-4 pb-4 pl-5 pr-5 ${profileLinkStyles.link}`}
      href="#root"
    >
      <ProfileIcon type="secondary" />
      Личный кабинет
    </a>
  );
}

export default ProfileLink;
