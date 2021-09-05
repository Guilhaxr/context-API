import React from "react";
import "./App.css";
import { useState } from "react";
import UserProfile from "./components/UserProfile";
import UserContext from "./contexts/UserContext";

function App() {
  const [isOnline, setIsOnline] = useState(false)
  
  // create method toggleStatus that will change the status value from true to false. keep in mind that this method has to be created before our state!
  const toggleIsOnline = (status) =>{
    setIsOnline(!status)
  }
  // create 2 properties for state: status (boolean) and toggle (toggleStatus method previously created)

  return (
    // pass the whole state to the provider as a value
    <UserContext.Provider  
      value ={{toggleIsOnline: toggleIsOnline, isOnline: isOnline}}>
      <UserProfile />
    </UserContext.Provider >
  );
}

export default App;
