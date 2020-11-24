import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import StorageIcon from '@material-ui/icons/Storage';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupIcon from '@material-ui/icons/Group';

import DashboardIcon from '@material-ui/icons/Dashboard';

import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import ListIcon from '@material-ui/icons/List';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,

  },
  nested: {
    paddingLeft: theme.spacing(2.5),

  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const SegundoClick = () => {
    setOpen2(!open2);
  };

  const TerceiroClick = () => {
    setOpen3(!open3);
  };
  const QuartoClick = () => {
    setOpen4(!open4);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">

        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button component='a' href='/' >
        <ListItemIcon>
          <DashboardIcon style={{ color: '#fff' }} />
        </ListItemIcon>
        <ListItemText primary="DashBoard" />
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AddToPhotosIcon style={{ color: '#fff' }}/>
        </ListItemIcon>
        <ListItemText primary="Cadastro" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit  >
        <List component="div" disablePadding >
          <ListItem button className={classes.nested} component='a' href='/cadastro/produtos'>
            <ListItemIcon>
              <ShoppingBasketIcon style={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Produtos" />
          </ListItem>
        </List>
      </Collapse>


      {/* Sub-menu Clientes */}


      <Collapse in={open} timeout="auto" unmountOnExit  >
        <List component="div" disablePadding >
          <ListItem button onClick={QuartoClick}>
            <ListItemIcon>
              < AssignmentIndIcon style={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Pessoas" />
            {open4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open4} timeout="auto" unmountOnExit  >
        <List component="div" disablePadding >
          <ListItem button className={classes.nested} component='a' href='/cadastro/pessoas'>
            <ListItemIcon>
              <PersonAddIcon style={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Cadastro de Pessoas" />
          </ListItem>
        </List>
      </Collapse>


      <Collapse in={open4} timeout="auto" unmountOnExit  >
        <List component="div" disablePadding >
          <ListItem button className={classes.nested} component='a' href='/usuarios/pessoas'>
            <ListItemIcon>
              <GroupIcon style={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Lista de Pessoas" />
          </ListItem>
        </List>
      </Collapse>
        </List>
      </Collapse>


 {/* Sub-menu Seção */}


 <Collapse in={open} timeout="auto" unmountOnExit  >
        <List component="div" disablePadding >
          <ListItem button className={classes.nested} component='a' href='/cadastro/categorias'>
            <ListItemIcon>
              <StorageIcon style={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Categorias" />
          </ListItem>
        </List>

        <ListItem button onClick={SegundoClick}>
        <ListItemIcon>
          <SupervisedUserCircleIcon style={{ color: '#fff' }}/>
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component='a' href='/cadastro/pessoas'>
            <ListItemIcon>
              < GroupAddIcon style={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Usuarios" />
          </ListItem>
        </List>
      </Collapse>

      {/* Sub-Menu Relatorios Venda */}

      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component='a' href='/usuarios/lista'>
            <ListItemIcon>
              < GroupIcon style={{ color: '#ffff' }}/>
            </ListItemIcon>
            <ListItemText primary="Lista de Usuarios" />
          </ListItem>
        </List>
      </Collapse>

      </Collapse>

        {/*
      // Adicionar no painel lateral, itens
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem> */}
      {/* Aqui começa o upload para nuvem
<ListItem button onClick={SegundoClick}>
        <ListItemIcon>
          <CloudIcon />
        </ListItemIcon>
        <ListItemText primary="Arquivos" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component={Link} to='/relatorio'>
            <ListItemIcon>
              < PrintIcon />
            </ListItemIcon>
            <ListItemText primary="Impressoras" />
          </ListItem>
        </List>
      </Collapse>
 */}



{/* Seção Relatorios */}


      <ListItem button onClick={TerceiroClick}>
        <ListItemIcon>
          <AssignmentIcon style={{ color: '#fff' }}/>
        </ListItemIcon>
        <ListItemText primary="Relatorios" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component='a' href='/relatorio/produtos'>
            <ListItemIcon>
              < ListIcon style={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Produtos"  />
          </ListItem>
        </List>
      </Collapse>

      {/* Sub-Menu Relatorios Venda */}

      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component='a' href='/relatorio/vendas'>
            <ListItemIcon>
              < ShoppingCartIcon style={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Vendas" />
          </ListItem>
        </List>
      </Collapse>



    </List>
  );
}
