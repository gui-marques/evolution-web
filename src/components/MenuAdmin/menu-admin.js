import React from 'react';
import clsx from 'clsx';

import NestedList  from './list-menu-admin.js';
import  ItemDois from './ItemDois.js';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({


  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#363636',




  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,


  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,

    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,



    }),

  },
  appBarShift: {

    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,

    transition: theme.transitions.create(['width', 'margin'], {

      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,


    }),
  },
  menuButton: {


    color: '#fff',
  },
  menuButtonHidden: {
    display: 'none',

  },
  title: {
    flexGrow: 1,


  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: '#363636',
    color: '#fff',

    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      color: '#fff',
    }),
  },
  drawerPaperClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      overflowX: 'hidden',




    }),
    width: theme.spacing(7),

    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),

    },


  },
  appBarSpacer: theme.mixins.toolbar,
  fixedHeight: {

    height: 240,

  },

}));

export default function MenuAdmin({title}){

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return(
    <>
    <CssBaseline />
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
    <Toolbar className={classes.toolbar}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
      >

        <MenuIcon />
      </IconButton>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} >
        {title}
      </Typography>
      <IconButton color="inherit">

        <Badge badgeContent={4} color="secondary">
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>



    <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >

        <div className={classes.toolbarIcon} style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <img src='https://www.vintecontologos.com.br/wp-content/uploads/2017/08/logo-subway-600x172.png' alt='logo' height='44px' />
          <IconButton onClick={handleDrawerClose} style={{position: 'absolute', marginRight: '-45px', marginTop: '5px'}}>
            <ChevronLeftIcon style={{color: '#fff'}} />
          </IconButton>
        </div>
        <Divider />
        <List><NestedList/></List>
        <Divider />
        <List><ItemDois/></List>
      {/*
        Caso queira colocar algo a mais no menu lateral
      <List></List> */}
      </Drawer>
      </>
  )
}
