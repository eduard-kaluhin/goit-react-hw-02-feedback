import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, ResultWrapper } from './Statistics.styled';
import StatisticsLayout from '../StatisticsLayout';

const Statistics = ({ feedbackOptions }) => {
  const { good, neutral, bad } = feedbackOptions;
  const optionsKey = Object.keys(feedbackOptions);

  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <StatisticsLayout title="Statistics">
      {totalFeedback === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Box>
          <Grid>
            {optionsKey.map(key => {
              return (
                <div className="option-wrapper" key={key}>
                  <p className="option-name">{key}</p>
                  <p className="option-count">{feedbackOptions[key]}</p>
                </div>
              );
            })}
          </Grid>
          <ResultWrapper>
            <p>Total: {totalFeedback}</p>
          </ResultWrapper>
          <ResultWrapper>
            <p>Positive feedback: {positivePercentage}%</p>
          </ResultWrapper>
        </Box>
      )}
    </StatisticsLayout>
  );
};

Statistics.propTypes = {
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default Statistics;


