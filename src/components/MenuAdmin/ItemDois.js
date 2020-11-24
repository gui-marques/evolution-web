import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useAuth } from '../../hooks/Auth';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';


 const ItemDois =()=> {
  const { signOut } = useAuth();
return(

  <div>
    <ListSubheader inset style={{ color: '#fff' }}>Outros</ListSubheader>
    <ListItem button component='a' onClick={() => signOut()}>
      <ListItemIcon>
        < ExitToAppIcon style={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
)
};

export default ItemDois;
