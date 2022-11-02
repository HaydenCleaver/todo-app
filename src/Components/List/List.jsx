import { Pagination, Card} from '@mantine/core';
import {When} from 'react-if';
import {useState, useContext} from 'react';
import {SettingsContext} from '../../Context/Settings/Settings';

const List = ({list, toggleComplete}) => {

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
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        </Card>
      ))}
      <When condition={paginationList.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount}/>
      </When>
    </>
  )
}

export default List;