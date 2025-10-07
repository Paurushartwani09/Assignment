import React from 'react';
import '../App.css';

const InputBar = ({ value, onChange, onNext, onSkip, disabledNext }) => {
  return (
    <div className="neon-inputbar">
      <div className="input-row">
        <div className="input-wrap">
          <input
            type="text"
            className="input-field"
            placeholder="Type your answer here..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !disabledNext) onNext();
            }}
          />
        </div>

        <button
          className="next-btn"
          type="button"
          onClick={onNext}
          disabled={disabledNext}
        >
          Next
        </button>
      </div>

      <button className="skip" type="button" onClick={onSkip}>
        Skip for now
      </button>
    </div>
  );
};

export default InputBar;
