import React, { useRef, useCallback } from 'react';
import {  FiMail, FiLock }  from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

import { Container, Content, AnimationContainer ,Background, Icons } from './styles';
import LogoImg from '../../assets/logo_evolution.png';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';


import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../utils/getValidationErrors';






interface SignInFormData {
  email: string;
  password: string;

}


const Signin: React.FC = () => {


  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();


  const { addToast } = useToast();

  const  handleSubmit = useCallback (
    async (data: SignInFormData ) => {

  try {
    formRef.current?.setErrors({});
    const  schema = Yup.object().shape({
      email: Yup.string().required('E-mail é obrigatório').email('Digite um Email válido'),
      password: Yup.string().required('Senha obrigatória'),

    });
    await schema.validate(data, {
      abortEarly: false,
    });

    await signIn({
      email: data.email,
      password: data.password,
   } );

   addToast({
    type: 'success',
    title: 'Login Realizado!',
    description: 'Seja bem vindo!',
  });


  } catch(err) {
    if(err instanceof Yup.ValidationError){
    const errors = getValidationErrors(err);
    formRef.current?.setErrors(errors);
    return
  }
  addToast({
    type: 'error',
    title: 'Error ao realizar login!',
    description: 'Verefique seu E-mail e Senha ou entre em contato com o Suporte',
  });
  }


  }, [signIn, addToast],

   );


return(
  <Container>
    <Content>
    <AnimationContainer>
    <img src={LogoImg} alt="empresa" width="320px" />

    <Form ref={formRef} onSubmit={handleSubmit}>
      <h1>Faça seu login</h1>

      <Input name="email" icon={FiMail} placeholder="E-mail" />

      <Input name="password" icon={FiLock} type="password" placeholder="Password" aria-current="true" />
      <Button type="submit">Entrar</Button>

      <Link to="/forgout">Esqueci minha senha</Link>


    </Form>
    <Icons >
    <Link to="https://www.facebook.com/evolutiontecnologiaoficial" target="blank">
      <FaFacebook />
      </Link>

      <Link to="https://www.instagram.com/evolutiongtba/" target="blank">
      <FaInstagram/>
      </Link>

      <Link to="https://api.whatsapp.com/send?phone=5541998820199&text=Evolution%20Informatica" target="blank">

      <FaWhatsapp/>
      </Link>

      </Icons>
       </AnimationContainer>
    </Content>


    <Background/>

  </Container>

)
}
export default Signin;
