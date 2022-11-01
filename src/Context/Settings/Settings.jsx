import React, {useState} from 'react';

export const SettingsContext = React.createContext();

const Settings = ({children}) => {

const[hideStatus] = useState(true);
const[itemNumber] = useState(5);
const[sortField] = useState('');


  return (
    <SettingsContext.Provider value ={{ hideStatus, itemNumber, sortField }}>
      {children}
    </SettingsContext.Provider>
  )

}

export default Settings;