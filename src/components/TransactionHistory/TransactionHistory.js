import PropTypes from 'prop-types';
import { History, Head, HeadContainer, HeadText, TransactionInfo } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
        <History>
            <Head>
                <HeadContainer>
                    <HeadText>Type</HeadText>
                    <HeadText>Amount</HeadText>
                    <HeadText>Currency</HeadText>
                </HeadContainer>
            </Head>
            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <HeadContainer key={id}>
                            <TransactionInfo>{ type}</TransactionInfo>
                            <TransactionInfo>{ amount}</TransactionInfo>
                            <TransactionInfo>{currency }</TransactionInfo>
                        </HeadContainer>
                    );
                })}
            </tbody>
        </History>
    )
};
 
TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}