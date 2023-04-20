import PropTypes from 'prop-types';
import { Profile, Description, UserAvatar, UserName, UserTag, UserLocation, Stats, StatsItem, StatsLabel, StatsQuantity } from './Profile.styled';

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Profile key={tag}>
            <Description>
                <UserAvatar src={avatar} alt={username} width={100}></UserAvatar>
                <UserName> {username}</UserName>
                <UserTag>@{tag} </UserTag>
                <UserLocation>{location} </UserLocation>
            </Description>
            <Stats>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{stats.followers} </StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{stats.views} </StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{stats.likes} </StatsQuantity>
                </StatsItem>
            </Stats>
        </Profile>
    )
};

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};