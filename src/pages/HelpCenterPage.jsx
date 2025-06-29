import React from 'react';
import FaqItem from '../components/FaqItem';
import './HelpCenterPage.css';

const faqs = [
  {
    question: 'What are the shipping options?',
    answer: 'We offer standard and express shipping within Egypt. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days.'
  },
  {
    question: 'What is your return policy?',
    answer: 'You can return any item within 14 days of purchase, provided it is in its original condition and packaging. Please visit our Policy page for more details.'
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order is shipped, you will receive an email with a tracking number and a link to the courier\'s website.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we only ship within Egypt. We are working on expanding our shipping options in the future.'
  }
];

const HelpCenterPage = () => {
  return (
    <div className="help-center-container">
      <div className="help-center-header">
        <h1>Help Center</h1>
        <p>How can we help you?</p>
      </div>
      <div className="help-center-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage; 