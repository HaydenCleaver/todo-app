import {Header, Navbar, Text, createStyles} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue,
    padding: theme.spacing.sm,
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.lg,

  },
  h1: {
    backgroundColor: theme.colors.gray,
    color: theme.colors.gray[0],
    width: '75%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  }
}))
const HeaderComponent = ({incomplete}) => {
  
  const { classes } = useStyles();
  return (
    <Header data-testid="todo-header">
      <Navbar className={classes.navbar}>
        <Text>Home</Text>
      </Navbar>
      <h1 data-testid="todo-h1" className={classes.h1}>To Do List: {incomplete} items pending</h1>
    </Header>
  )  
}

export default HeaderComponent;