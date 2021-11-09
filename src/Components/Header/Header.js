import React from 'react';
import {Link} from "react-router-dom";
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import  '../Header/header.css'

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      Eng
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      Ru
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      Uzb
    </Menu.Item>
  </Menu>
);
const Header = () => {
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
        Button <DownOutlined />
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
