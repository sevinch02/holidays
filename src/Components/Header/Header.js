import React from 'react';
import {Link} from "react-router-dom";
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import  '../Header/header.css'
import i18n from "i18next";
import { useState } from 'react';

const Header = () => {

  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');
  

  const handleChangeLaunguege = lng => {
    i18n.changeLanguage(lng.key)
    setLanguage(lng.key);
    localStorage.setItem('lang', lng.key)
  }
  const menu = (
    <Menu onClick={handleChangeLaunguege}>
      <Menu.Item key="en" icon={<UserOutlined />}>
        Eng
      </Menu.Item>
      <Menu.Item key="ru" icon={<UserOutlined />}>
        Ru
      </Menu.Item>
      <Menu.Item key="uz" icon={<UserOutlined />}>
        Uzb
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header">
      <div className='container'>

      <div className="row">
        <nav className="navbar">
        <Link className="navbar__link" to="/">
          <h1  className='sayt-name'>FIESTA</h1>
        </Link>
        
        </nav>
        <div className='lang'>
        <Space wrap>
   
    <Dropdown overlay={menu}>
      <Button>
        {language} <DownOutlined />
      </Button>
    </Dropdown>
  </Space>,
        </div>
      </div>
      </div>
    </div>
  );
};
export default Header;
