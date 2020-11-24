import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';


import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';



import MenuAdmin from '../../components/MenuAdmin/menu-admin.js'
import Footer from '../../components/MenuAdmin/footer.js'

import api2 from '../../services/api2';

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
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',

  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
    top: 109,
    left: 1270,
  },
  fab: {
    margin: theme.spacing(2),
  },

}));


export default function CadUsuarios() {
  const classes = useStyles();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('');

 async function handleSumbmit(){
  const data = {
    nome:nome,
    email: email,
    password: password,
    tipo_usuario: tipo
  }
  console.log(data);
  if(nome!==''&&email!==''&&password!==''&&tipo!==''){

    const response = await api2.post('/usuarios/usuario', data);
    if(response ===200){
      window.location.href='/usuarios/lista'
    }else{
      alert('Error ao cadastrar o Usuario')
    }
  }else{
    alert('Preencha todos os dados por favor!')
  }


  }




  return (
    <div className={classes.root} >


      <MenuAdmin title={'Cadastro de Pessoas'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Paper className={classes.paper}>
            <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nome"
            name="nome"
            label="Nome Completo"
            fullWidth
            autoComplete="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />


        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            type="password"
            id="password"
            name="password"
            label="Senha"
            fullWidth

            value={password}
            onChange={e => setPassword(e.target.value)}
          />


        </Grid>
        <Grid item xs={12} sm={3}>
        <FormControl className={classes.formControl}>
        <InputLabel id="tipo">Função</InputLabel>
        <Select
          labelId="Função"
          id="tipo"
          value={tipo}
          onChange={e => setTipo(e.target.value)}
        >
          {/* <MenuItem value="">

          </MenuItem> */}
          <MenuItem value={1}>Administrador</MenuItem>
          <MenuItem value={2}>Gerente</MenuItem>
          <MenuItem value={3}>Funcionario</MenuItem>
        </Select>
        <FormHelperText>Qual o nível de permissão do úsuario?</FormHelperText>
      </FormControl>


        </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button  variant="contained" color="primary" onClick={handleSumbmit}>
            SALVAR
          </Button>
        </Grid>

            </Paper>

          </Grid>

        </Grid>
        </Container>
          <Box pt={6}>
            <Footer />
          </Box>
      </main>
    </div>
  );
}
