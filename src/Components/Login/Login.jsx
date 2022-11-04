import { Button, Group, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import { When } from "react-if";
import { AuthContext } from "../../Context/Auth/Auth";

const Login = () => {

  let config = {
    baseURL: '',
    
  }
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
    <Group position='right'>
    <When condition={!isLoggedIn}>
      <TextInput placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
      <TextInput placeholder='Password' onChange={(e) => setpassword(e.target.value)}/>
      <Button onClick={()=> login(username, password)}>Login</Button>
    </When>
    <When condition={isLoggedIn}>
      <Button onClick={()=> logout()}>Logout</Button>
    </When>
    </Group>

    
    
    </>
  )
}

export default Login;
