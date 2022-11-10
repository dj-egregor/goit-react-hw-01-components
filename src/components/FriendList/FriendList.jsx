import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
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
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
