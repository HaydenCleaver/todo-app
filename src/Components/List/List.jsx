import { Pagination, Card, createStyles, Badge, Text, Group, CloseButton} from '@mantine/core';
import {When} from 'react-if';
import {useState, useContext} from 'react';
import {SettingsContext} from '../../Context/Settings/Settings';

const useStyles = createStyles((theme) => ({
  badge: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs,
    margin: '3px',
  }
}))

const List = ({list, toggleComplete, deleteItem}) => {

  const {classes} = useStyles();

  const{itemNumber, hideStatus} = useContext(SettingsContext);
  const[page, setPage] = useState(1);

  const paginationList = hideStatus ? list : list.filter(item => !item.complete);

  const listStart = itemNumber * (page - 1);
  const listEnd = listStart + itemNumber;

  const pageCount = Math.ceil(paginationList.length / itemNumber);
  const displayList = paginationList.slice(listStart, listEnd);
  return(
    <>
      {displayList.map(item => (
        <Card key={item.id} withBorder>
          <Card.Section withBorder>
            <Group position='apart'>
              <Group position='left'>
                <Badge 
                  className={classes.badge} 
                  color={item.complete ? "green" : "red"} 
                  variant="filled" onClick={()=> toggleComplete(item.id)}
                  > {item.complete ? "Complete" : "Pending"}
                </Badge>
                <Text>{item.assignee}</Text>
              </Group>
              <CloseButton title="delete item" onClick={()=> deleteItem(item.id)}/>
            </Group>
          </Card.Section>
          <Text align="left">{item.text}</Text>
          <Text align="right">Difficulty: {item.difficulty}</Text>
        </Card>
      ))}
      <When condition={paginationList.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount}/>
      </When>
    </>
  )
}

export default List;