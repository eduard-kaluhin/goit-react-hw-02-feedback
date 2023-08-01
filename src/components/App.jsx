import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification'; // Імпортуємо компонент Notification

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    document.title = 'HW-2 Feedback';
  }

  onClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onClick={this.onClick} feedbackOptions={this.state} />
        {totalFeedback === 0 ? ( // Перевіряємо, чи є зібрані відгуки
          <Notification message="No feedback given" /> // Показуємо Notification, якщо відгуків немає
        ) : (
          <Statistics feedbackOptions={this.state} /> // Показуємо Statistics, якщо є зібрані відгуки
        )}
      </Section>
    );
  }
}
