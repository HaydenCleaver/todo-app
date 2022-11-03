import React, {useEffect, useState} from 'react';

export const SettingsContext = React.createContext();

const Settings = ({children}) => {

const[hideStatus, setHideStatus] = useState(false);
const[itemNumber, setItemNumber] = useState(4);
const[sortField, setSortField] = useState('difficulty');
const[userSettings, setUserSettings] = useState({});

const saveLocally = ({hideStatus, itemNumber, sortField}) => {
  localStorage.setItem('todo', 
  JSON.stringify({hideStatus, itemNumber, sortField}))
}

const values = {
  hideStatus,
  setHideStatus,
  itemNumber,
  setItemNumber,
  sortField,
  setSortField,
  userSettings,
  setUserSettings,
  saveLocally,
}

useEffect(() => {
  let storage = JSON.parse(localStorage.getItem('todo'));
  if(storage){
    console.log(storage); 
    setHideStatus(storage.setHideStatus);
    setItemNumber(storage.setItemNumber);
    setSortField(storage.setPageItems);
  }
}, []);

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

}

export default Settings;