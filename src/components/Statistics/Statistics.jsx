import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResultWrapper } from './Statistics.styled';
import StatisticsLayout from '../StatisticsLayout';


const Statistics = ({ feedbackOptions, totalFeedback, positivePercentage }) => {
  
  return (
    <StatisticsLayout title="Statistics">
        <Box>
          <Grid>
            {Object.keys(feedbackOptions).map(key => {
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
    </StatisticsLayout>
  );
};
Statistics.propTypes = {
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;


