import styled from "styled-components";
export const FriendInfo = styled.li`
    align-items: center;
    background-color: ${p => p.theme.colors.white};
    border: 1px solid ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radius.l};
    display: flex;
    margin: 20px;
    padding: 15px;
    
`;

export const FriendAvatar = styled.img`
    border-radius: ${p => p.theme.radius.round};
    margin-right: 20px; 
`;
export const FriendStatus = styled.span`
    background-color: ${p => {
    return p.children ? p.theme.colors.green : p.theme.colors.red;
    }};
    border-radius: ${p => p.theme.radius.round};
    display: inline-block;
    height: 18px;
    margin-left: 12px;
    margin-right: 12px;
    width: 18px;
`;

export const FriendName = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-right: 12px;
`;