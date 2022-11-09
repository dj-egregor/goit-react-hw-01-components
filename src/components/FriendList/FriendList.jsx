import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  console.log(
    '🚀 ~ file: FriendList.jsx ~ line 2 ~ FriendList ~ friends',
    friends
  );
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.friend} key={friend.id}>
          <span
            className={friend.isOnline ? css.isOnline : css.isOffline}
          ></span>
          <img className={css.avatarImage} src={friend.avatar} alt="" />
          {friend.name}
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};
