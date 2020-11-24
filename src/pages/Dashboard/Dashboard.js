import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';






import MenuAdmin from '../../components/MenuAdmin/menu-admin.js'

import Footer from '../../components/MenuAdmin/footer.js'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

}));

export default function Dashboard() {
  const classes = useStyles();



  return (
    <div className={classes.root}>


      <MenuAdmin title={'DashBoard'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>


          <Grid container spacing={3}>

          </Grid>
          <Box pt={4}>
            <Footer />

          </Box>
        </Container>
      </main>
    </div>
  );
}
