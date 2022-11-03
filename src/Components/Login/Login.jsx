import { Button } from "@mantine/core";
import { useContext, useState } from "react";
import { When } from "react-if";
import { AuthContext } from "../../Context/Auth/Auth";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');

  const {
      isLoggedIn,
      user,
      error,
      can,
      login,
      logout,
    } = useContext(AuthContext);
  
  
  return(
    <>
    <label>
      <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
    </label>
    <label>
      <input placeholder='Password' onChange={(e) => setpassword(e.target.value)}/>
    </label>
    <When condition={!isLoggedIn}>
      <Button onClick={()=> login(username, password)}>Login</Button>
    </When>
    <When condition={isLoggedIn}>
      <Button onClick={()=> logout()}>Logout</Button>
    </When>
    

    
    
    </>
  )
}

export default Login;
