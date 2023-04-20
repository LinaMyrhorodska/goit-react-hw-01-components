import styled from "styled-components";

export const History = styled.table`
 background-color: ${p => p.theme.colors.white};
    border: 1px solid ${p => p.theme.colors.accent};
    margin: 20px;
    width: 450px;
    text-align: center;
`;

export const Head = styled.thead`
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.white};
text-transform: uppercase;
`;

export const HeadContainer = styled.tr`
:nth-child(2n) {
  background-color: ${p => p.theme.colors.lightaccent};

}
`;

export const HeadText = styled.th`
background-color: ${p => p.theme.colors.accent};
  padding: 10px;
`;

export const TransactionInfo = styled.td`
    padding: 10px;
    color: ${p => p.theme.colors.black};
    :first-letter {
        text-transform: uppercase;
    }
`;








