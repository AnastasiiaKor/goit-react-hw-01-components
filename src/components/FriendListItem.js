import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
export default function FriendListItem({ status, avatar, name }) {
  return (
    <>
      <span className={status ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}
FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
