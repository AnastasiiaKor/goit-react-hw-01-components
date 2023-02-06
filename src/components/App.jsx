import user from '../user.json';
import userFriends from '../friends.json';
import data from '../data.json';
import transactions from '../transactions.json';
import Profile from './Profile';
import FriendList from './FriendList';
import Statistics from './Statistics';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#e1e1e1',
        padding: 40,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={userFriends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
