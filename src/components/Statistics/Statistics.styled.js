import styled from "styled-components";


export const StatSection = styled.section`
    background-color: ${p => p.theme.colors.white};
    border: 1px solid ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radius.l};
    margin: 20px;
    margin-bottom: 72px; 
    
`;

export const StatTitle = styled.h2`
    text-align: center;
    width: 350px;
    padding: 30px;
    margin: auto;
    text-transform: uppercase;
`;

export const StatsList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    border-bottom-left-radius: ${p => p.theme.radius.l};
    border-bottom-right-radius: ${p => p.theme.radius.l};
    border-top: 1px solid ${p => p.theme.colors.grey};
    background-color: ${p => p.theme.colors.lightgrey};
    
`;

export const StatItem = styled.li`
    text-align: center;
    padding: 20px;
    width: 100%;

    :not(:last-child) {
        border-right: 1px solid ${p => p.theme.colors.grey};
    }
`;

export const StatLabel = styled.span`
 color: ${p => p.theme.colors.accent};
  display: block;
   
`;

export const StatPercentage = styled.span`
    color: ${p => p.theme.colors.black};
    font-size: 20px;
    font-weight: 500; 
`;

