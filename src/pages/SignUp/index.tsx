import React, {useCallback, useRef} from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock, FiHome }  from 'react-icons/fi';
import { FormHandles } from '@unform/core'
import { Container, Content, AnimationContainer ,Background } from './styles';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';


import getValidationErrors from '../../utils/getValidationErrors';

import LogoImg from '../../assets/logo_evolution.png';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';




const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

const  handleSubmit = useCallback (async (data: Object)=> {
  formRef.current?.setErrors({});

try {
  const  schema = Yup.object().shape({
    cnpj: Yup.string().required('CNPJ inválido e obrigatório!').min(11, 'No minimo 11 caractere').max(11, 'O CNPJ contém apenas 11 números'),
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().required('E-mail é obrigatório').email('Digite um Email válido'),
    password: Yup.string().min(6, 'No minimo 6 digitos'),

  });
  await schema.validate(data, {
    abortEarly: false,
  });


}catch(err) {
  const errors = getValidationErrors(err);
  formRef.current?.setErrors(errors);

}
}, []);

  return(
    <Container>
    <Background/>
   <Content>
   <AnimationContainer>
   <img src={LogoImg} alt="empresa" width="370px" />

   <Form ref={formRef} onSubmit={handleSubmit}>
     <h1>Faça seu login</h1>
     <Input name="cnpj" icon={FiHome} placeholder="CNPJ"/>
     <Input name="name" icon={FiUser} placeholder="Nome"/>
     <Input name="email" icon={FiMail} placeholder="E-mail"/>
     <Input name="password" icon={FiLock} type="password" placeholder	="Password" />
     <Button type="submit">Entrar</Button>


   </Form>
   <Link to="/">
     <FiArrowLeft />
     </Link>
     </AnimationContainer>
   </Content>


 </Container>



  );
}

export default SignUp;
