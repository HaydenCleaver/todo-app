import React, {useState} from 'react';

export const SettingsContext = React.createContext();

const Settings = ({children}) => {

const[hideStatus, setHideStatus] = useState(false);
const[itemNumber, setItemNumber] = useState(4);
const[sortField, setSortField] = useState('difficulty');

const values = {
  hideStatus,
  itemNumber,
  sortField,
}
  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

}

export default Settings;