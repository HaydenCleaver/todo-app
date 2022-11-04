import {Button, Card, createStyles, Grid, NumberInput, Switch, Text, TextInput} from '@mantine/core';
import {IconSettings} from '@tabler/icons';
import { useContext, useState } from 'react';
import { When } from 'react-if';
import { SettingsContext } from '../../Context/Settings/Settings';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray,
    color: theme.colors.gray[0],
    width: '75%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
  formHeading: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
}))

const UserSettings = () => {
  
  const {classes} = useStyles();
  const {
    hideStatus,
    setHideStatus,
    itemNumber,
    setItemNumber,
    sortField,
    setSortField,
    userSettings,
    setUserSettings,
    saveLocally,
  } = useContext(SettingsContext);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    saveLocally({hideStatus, itemNumber, sortField});
  }

  return(
    <>
    <h1 className={classes.h1}><IconSettings/>Manage Settings</h1>
    <Grid style={{width: '80%', margin: 'auto'}}>
      <Grid.Col xs={12} sm={4}>
        <Card withBorder p="xs">
          <Text>Update Settings</Text>
          
          <Switch label="Show Completed ToDos" checked={hideStatus} onChange={(event) => setHideStatus(event.currentTarget.checked)}/>

            <NumberInput
            placeholder={itemNumber}
            onChange={(e) => setItemNumber(e)}
            label = "Tasks per page"
            mb='sm'
            />

            <TextInput
              placeholder={sortField}
              onChange={(e) => setSortField(e.target.value)}
              label ="Sort Keyword"
              mb='sm'
            />

            <Button onClick={handleClick}>Show New Settings</Button>
        </Card>  
      </Grid.Col>
      <Grid.Col xs={12} sm={4}>
        <Card withBorder p="xs">
          <When condition={show}>
            <Text m='xl'>Updated Settings</Text>
            <Card.Section>
              <Text m='sm'>{hideStatus ? 'Show' : 'Hide'} Completed ToDos</Text>
              <Text m='sm'>Items Per page: {itemNumber}</Text>
              <Text m='sm'>Sort Keyword: {sortField}</Text>
            </Card.Section>
          </When>
        </Card>  
      </Grid.Col>
    </Grid>
    </>
  )
}

export default UserSettings;