import { IdcardOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';

export const Navbar = () => {
  const navElements = [
    {
      icon: <UserOutlined style={{ fontSize: '20px' }} />,
      desc: 'Users',
      link: '/users',
    },
    {
      icon: <IdcardOutlined style={{ fontSize: '20px' }} />,
      desc: 'Posts',
      link: '/posts',
    },

  ];
  return (
    <div className={classes.navbar}>
      {navElements.map((element, index) => (
        <Link to={element.link} key={index}>
          <div className={classes.navbar__item}>
            {element.icon}
            <span className={classes.navbar__desc}>{element.desc}</span>
          </div>
        </Link>
      ))}

    </div>
  );
};
