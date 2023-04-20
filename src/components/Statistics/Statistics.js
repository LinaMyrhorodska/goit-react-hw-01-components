import PropTypes from 'prop-types';
import { StatSection, StatTitle, StatsList, StatItem, StatLabel, StatPercentage } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
    return (
        <StatSection>
       { title && <StatTitle>{ title}</StatTitle>}
        <StatsList>
            
            {stats.map((stat) => {
                return (
            <StatItem key={stat.id}>
                <StatLabel>{ stat.label}</StatLabel>
                <StatPercentage>{ stat.percentage}%</StatPercentage>
                    </StatItem>
                )
           })}
        </StatsList>
    </StatSection>)

};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired,
    )
}