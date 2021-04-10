import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';
import {Card} from '../Card'
import './style.css';

export const Navbar = ({userData}) => {

  return (
    <nav className="navbar">
      <Link to={ROUTES.MAIN}>Main</Link>
      <Link to={ROUTES.USERS}>Users</Link>
      <Link to={ROUTES.CUSTOMINPUT}>Custom input</Link>
      {userData ? 
        <Card picture = {userData.picture} name = {userData.name} small />
      :
        <Link to={ROUTES.SIGNIN}>Sign in</Link>
      }
    </nav>
  );
};