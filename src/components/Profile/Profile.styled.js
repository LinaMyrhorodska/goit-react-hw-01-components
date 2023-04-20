import styled from "styled-components";

export const Profile = styled.div`
    background-color: ${p => p.theme.colors.white};
    border: 1px solid ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radius.l};
    margin: 20px;
    margin-bottom: 72px;
    
`;

export const Description = styled.div`
    text-align: center;
    padding: 30px;
`;

export const UserAvatar = styled.img`
    border: 0.5px solid ${p => p.theme.colors.grey};
    border-radius: ${p => p.theme.radius.round};
`;

export const UserName = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin: 16px;
`;

export const UserTag = styled.p`
    color: ${p => p.theme.colors.darkgrey};
    margin: 8px;
`;

export const UserLocation = styled.p`
    color: ${p => p.theme.colors.darkgrey};
`;

export const Stats = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    border-bottom-left-radius: ${p => p.theme.radius.l};
    border-bottom-right-radius: ${p => p.theme.radius.l};
    background-color: ${p => p.theme.colors.lightgrey};
    border-top: 1px solid ${p => p.theme.colors.grey};
`;

export const StatsItem = styled.li`
    text-align: center;
    padding: 20px;
    width: 100%;

    :not(:last-child) {
        border-right: 1px solid ${p => p.theme.colors.grey};
    }
`;

export const StatsLabel = styled.span`
    display: block;
    color: ${p => p.theme.colors.darkgrey};
    font-weight: 500;
    margin-bottom: 5px;
`;

export const StatsQuantity = styled.span`
    color: ${p => p.theme.colors.black};
    font-weight: 600;
    display: block;
`;