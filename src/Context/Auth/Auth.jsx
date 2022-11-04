import React, {useEffect, useState} from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    //if user exists, and capabilities exists, does it have this specific
    // capability?
    return user?.capabilities?.includes(capability);
  }

  const login = async (username, password) => {

    let config = {
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      method: 'post',
      auth: {
        username,
        password,
      }
    }

    let response = await axios(config);

    let { token } = response.data;

    if(token){
      try{
        _validateToken(token);
      } catch (err){
        setError(err);
        console.log(err);
      }
    }
  }

  function _validateToken(token){
    try{
      
      let validUser = jwt_decode(token);
      console.log('--------valid user------', validUser);
      if(validUser){

        setUser(validUser);
        setIsLoggedIn(true);
        console.log('Now Logged In');
        cookie.save('auth', token);
      }

    } catch (err) {

      setIsLoggedIn(false);
      setError(err);
      console.log(err);

    }
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    setError(null);
    cookie.remove('auth');
  }

  useEffect(()=> { //automatically logs user in if cookie can be loaded and validated

    let token = cookie.load('auth');

    if(token){
      _validateToken(token);
    }

  }, [])

  let values = {
    isLoggedIn,
    user,
    error,
    can,
    login,
    logout,
  }

  return(
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;