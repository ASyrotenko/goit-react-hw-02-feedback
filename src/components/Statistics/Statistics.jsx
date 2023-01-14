import { StatisticsList, StatisticsItem } from './statistics.styled';

export const Statistics = ({ options, values, total, positivePercentage }) => {
  return (
    <StatisticsList>
      {options.map((option, i) => (
        <StatisticsItem key={i}>
          {option}: {values[i]}
        </StatisticsItem>
      ))}
      <StatisticsItem>Total: {total}</StatisticsItem>
      <li>
        Positive feedbacks: {positivePercentage ? positivePercentage : 0}%
      </li>
    </StatisticsList>
  );
};
