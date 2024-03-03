import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransationHistory/TransationHistory';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transation.json';
import './App.css';
import 'modern-normalize';

const App = () => {
  return (
    <>
      <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />  
    </>
  );
};

export default App;