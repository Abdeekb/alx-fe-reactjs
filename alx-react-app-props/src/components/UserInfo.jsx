// src/components/UserInfo.jsx
import { useContext } from 'react';
import { UserContext } from '../UserContext';  

function UserInfo() {
  const userData = useContext(UserContext);   
  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserInfo;
