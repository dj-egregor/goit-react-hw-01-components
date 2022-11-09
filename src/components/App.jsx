import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

export const App = () => {
  return (
    <>
      <Profile profileData={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
