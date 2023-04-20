import PropTypes from 'prop-types';
import { FriendInfo, FriendAvatar, FriendStatus, FriendName } from './FriendListItem.styled';


export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => { 
    return (
        <FriendInfo>
            <FriendStatus>{isOnline}</FriendStatus>
        <FriendAvatar src={avatar} alt={name} width="50"></FriendAvatar>
        <FriendName>{name}</FriendName>
        </FriendInfo>
    )
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
            isOnline: PropTypes.bool.isRequired, 
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
};