import { Divider, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import React from 'react';
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
  } from 'react-router-dom';
import { ListInventoryItem } from '../types';
interface MyDrawerProps {
    items: ListInventoryItem[]
}
interface ListItemLinkProps {
    primary?: string;
    to: string;
  }

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
    function Link(itemProps, ref) {
      return <RouterLink ref={ref} {...itemProps} role={undefined} />;
    },
  );
  function ListItemLink(props: ListItemLinkProps) {
    const { primary = "p", to } = props;
  
    return (
      <ListItemButton component={Link} to={to}>
        <ListItemText primary={primary} />
      </ListItemButton>
    );
  }

  
export const MyDrawer = ({items}:MyDrawerProps) => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemLink to={item.to} primary={item.text}/>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
