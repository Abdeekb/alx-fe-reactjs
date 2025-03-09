import { useContext } from 'react';
import { UserContext } from '../App'; // Import UserContext

const UserProfile = () => {
  // Consume user data using useContext hook
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
