import { Group, Header, Navbar, Text, createStyles } from '@mantine/core'
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue,
    padding: theme.spacing.sm,
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.lg,
  },
  link: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
  }
}))

const HeaderComponent = ({ incomplete }) => {

  const { classes } = useStyles();
  return (
    <Header data-testid="todo-header">
      <Navbar className={classes.navbar}>
        <Group position='apart' spacing='xs'>
          <Group position='left'>
            <Link to ="/" default>Home</Link>
            <Link to ="/UserSettings">Settings</Link>
          </Group>
          <Login/>
        </Group>
      </Navbar>
    </Header>
  )
}

export default HeaderComponent;