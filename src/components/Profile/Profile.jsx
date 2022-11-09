import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ profileData }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={profileData.avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{profileData.username}</p>
        <p className={css.tag}>@{profileData.tag}</p>
        <p className={css.location}>{profileData.location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{profileData.stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{profileData.stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{profileData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
