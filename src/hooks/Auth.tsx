import React, { createContext, useCallback, useState, useContext } from  'react';
import api from '../services/api';


interface User {
  id: string;
  name: string;
  avatar: string;
  cnpj: string;
}

interface AuthState{
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

 const AuthContext = createContext<AuthContextData>({} as AuthContextData);

 const AuthProvider: React.FC = ({ children }) => {
 const [data, setData] = useState<AuthState>(() => {
 const token = localStorage.getItem('@EvoLogin:token');
 const user = localStorage.getItem('@EvoLogin:user');

 if ( token && user ){
   return { token, user:JSON.parse(user) };
 }
 return {} as AuthState;

 });


  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('usuarios/login', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@EvoLogin:token', token);
    localStorage.setItem('@EvoLogin:user', JSON.stringify(user));

    setData({ token, user});
  }, []);

  const signOut = useCallback(()=> {
    localStorage.removeItem('@EvoLogin:token');
    localStorage.removeItem('@EvoLogin:user');

    setData({} as AuthState);
  }, []);


  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut  }}>
        {children}
    </AuthContext.Provider>

    );
};

function useAuth(): AuthContextData {
 const contex = useContext(AuthContext);

 if (!contex) {
   throw new Error(' useAuth must be used within an AuthProvider');
 }
 return contex;
}
export {  AuthProvider, useAuth };

