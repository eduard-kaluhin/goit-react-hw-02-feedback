import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    document.title = 'HW-2 Feedback';
  }

  // Метод для підрахунку загальної суми відгуків
  getTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // Метод для підрахунку відсотку позитивних відгуків
  getPositivePercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.getTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  onClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.getTotalFeedback();
    const positivePercentage = this.getPositivePercentage();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onClick={this.onClick} feedbackOptions={ Object.keys.this.state} />
        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
  good={good}
  neutral={neutral}
  bad={bad}
  totalFeedback={totalFeedback}
  positivePercentage={positivePercentage}
  feedbackOptions={this.state} // Передаем feedbackOptions в компонент Statistics
/>
        )}
      </Section>
    );
  }
}

export default App;
