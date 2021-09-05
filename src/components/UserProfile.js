import React, {useContext} from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
  // access the context information with useContext hook
  const {toggleIsOnline, isOnline} = useContext(UserContext)
  return (
    <>
      
      <div>User is {isOnline ? "online " : "offline"} </div>

      {/* when clicked, the button will call the method toggleStatus */}
      <button onClick={()=>toggleIsOnline(isOnline)}>click to change user status </button>
    </>
  );
}

export default UserProfile;
