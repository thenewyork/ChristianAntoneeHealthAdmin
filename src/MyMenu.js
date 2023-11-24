import React from 'react';
import {Menu} from 'react-admin';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import {MenuItem} from '@mui/material';

const MyMenu = () => {
  return (
    <Menu>
      <Menu.ResourceItem name="exercises" />
      <Menu.ResourceItem name="tests" />
      <Menu.ResourceItem name="quickRoutines" />
      <Menu.ResourceItem name="education" />
      <Menu.ResourceItem name="settings" />
      <Menu.ResourceItem name="users" />
      <Menu.ResourceItem name="plans" />
      <Menu.Item
        to="/premium-users"
        primaryText="Premium users"
        leftIcon={<InventoryOutlinedIcon />}
      />
    </Menu>
  );
};

export default MyMenu;
