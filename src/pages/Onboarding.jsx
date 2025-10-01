import React, { useState } from 'react';
import ChatBubble from '../components/ChatBubble';
import InputBar from '../components/InputBar';
import questions from '../data/questions.json';

const Onboarding = ({ isActive }) => {
  const total = questions.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const renderFollowUp = (template, answerObj) => {
    if (!template) return '';
    return template.replace(/\{([^}]+)\}/g, (_, key) => {
      const v = answerObj[key];
      return v ? v : '—';
    });
  };

  const agentMessages = () => {
    const intro =
      "Hello! To personalize your experience, I’ll ask a set of questions to tailor Themis for your organization.";
    if (index === 0) {
      return [intro, questions[0].question];
    }
    if (index < total) {
      const prev = questions[index - 1];
      const prevFollowUp = prev ? renderFollowUp(prev.follow_up || prev.question, answers) : '';
      const curr = questions[index].question;
      return [prevFollowUp, curr];
    }
    return [];
  };

  const handleNext = () => {
    setError('');
    const currQ = questions[index];
    const trimmed = input.trim();

    
    if (currQ && currQ.validation && trimmed.length === 0) {
      setError(currQ.validation);
      return;
    }

   
    setAnswers(prev => ({ ...prev, [currQ.field]: trimmed || null }));
    setInput('');
    setIndex(i => i + 1);
  };

  const handleSkip = () => {
    setError('');
    const currQ = questions[index];
    setAnswers(prev => ({ ...prev, [currQ.field]: null }));
    setInput('');
    setIndex(i => i + 1);
  };

  if (index >= total) {
 
    return (
    <div className={`onboarding-card onboarding ${isActive ? "active" : ""}`}>
        <h2 className="mb-2">Thanks — you're all set!</h2>
        <p className="">Here’s a summary of your responses and follow-ups:</p>

        <div className="answers-list mt-3">
          {questions.map((q, i) => {
            const ans = answers[q.field];
            const follow = renderFollowUp(q.follow_up || '', answers);
            return (
              <div key={q.field} className="mb-3 p-3" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 10 }}>
                <div><strong>Q{ i + 1 } — {q.field}</strong></div>
                <div className="mt-1">{q.question}</div>
                <div className="mt-2">Answer: <em>{ans ?? '— skipped —'}</em></div>
                {q.follow_up && <div className="mt-2 text-info">Follow up: {follow}</div>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const [m1, m2] = agentMessages();
  const currentQuestion = questions[index];

  return (
    <div className="onboarding-card">
      <h2 className="title mb-3">Welcome! Let's get you set with Themis</h2>
      <p className="subtitle">
        I'm your AI Agent. I'm here to learn about your needs so we can configure the AI      Management System for you.
      </p>

      <div className="question-count text-center my-2">Question {Math.min(index + 1, total)} of {total}</div>

      <div className="chat-area mt-3">
        {m1 && <ChatBubble text={m1} />}
        {m2 && <ChatBubble text={m2} />}
      </div>

      {error && <div className="text-danger mt-2 small">{error}</div>}

      <InputBar
        value={input}
        onChange={(v) => {
          setError('');
          setInput(v);
        }}
        onNext={handleNext}
        onSkip={handleSkip}
        disabledNext={currentQuestion && currentQuestion.validation ? false : input.trim().length === 0}
      />
    </div>
  );
};

export default Onboarding;