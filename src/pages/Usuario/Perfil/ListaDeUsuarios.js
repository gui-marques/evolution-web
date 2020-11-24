import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';


import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import AddIcon from '@material-ui/icons/Add';
import AccountBoxIcon from '@material-ui/icons/AccountBox';



import MenuAdmin from '../../../components/MenuAdmin/menu-admin.js'
import Footer from '../../../components/MenuAdmin/footer.js'


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import api2 from '../../../services/api2';

import Chip from '@material-ui/core/Chip';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',},toolbar: {paddingRight: 24,},title: {flexGrow: 1,},appBarSpacer: theme.mixins.toolbar,content: {flexGrow: 1,height: '100vh',overflow: 'auto',},container: {paddingTop: theme.spacing(4),paddingBottom: theme.spacing(4),},
  paper: {padding: 15,display: 'flex',overflow: 'auto',flexDirection: 'column',},

}));


export default function ListUser() {
  const classes = useStyles();


  const [dados, setDados] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://evosistema-rest-api.herokuapp.com/usuarios',
      {

        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Authorization":" "+ localStorage.getItem('@EvoLogin:token')
        },
    }

      )
      const data = await response.json();
      const usuario= data['resultado'];
       setDados(usuario);
        console.log(data);

    })();
  }, []);

async function handleDelete(id){
  if(window.confirm("Deseja realmente excluir esse usuario?")){
    var result = await api2.delete('usuarios/'+id);
  }
  if( result.status === 202){
    window.location.href = '/usuarios';
  }else{
    alert('Ocorreu um erro! Por favor, tente novamente!');
  }
}

    const labelUser = (value) =>{
      var arr = ['primary', 'default', 'secondary']
      return arr[value-1];
    }
  return (

    <div className={classes.root} >



      <MenuAdmin title={'Gerenciamento de Pessoas'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={5}  >
          <Grid item sm={12}>
          <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddIcon />}
        href={'/cadastro/pessoas'}
      >
        Novo Usuario
      </Button>
      <br/>

      <br/>



            <Paper className={classes.Paper} >



              <Grid container spacing={3}>

               <Grid item xs={12} sm={12}>


               <TableContainer component={Paper}>



      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Função</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {dados.map((resultado) => (
            <TableRow key={resultado.id_usuario}>

              <TableCell align="center" >{<Chip
                    label={resultado.nome_usuario}
                    color={labelUser(resultado.tipo_usuario)}

                  />}</TableCell>
              <TableCell align="center">{resultado.email}</TableCell>
              <TableCell align="center">{

                  <Chip
                    icon={<AccountBoxIcon />}
                    label={resultado.tipousuario_descricao}
                    color={labelUser(resultado.tipo_usuario)}

                  />

              }

              </TableCell>
              <TableCell align="center">{resultado.cnpj}</TableCell>
              <TableCell align="center">

              <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button color="primary" href={'/perfil/' + resultado.id_usuario}><EditIcon/></Button>
              <Button color="secondary" onClick={() => handleDelete(resultado.id_usuario)}><DeleteIcon/></Button>

                </ButtonGroup>


              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

               </Grid>
              </Grid>


            </Paper>
          </Grid>

          </Grid>
          <Box pt={6}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}
