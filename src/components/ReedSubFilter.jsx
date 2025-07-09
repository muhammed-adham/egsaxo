import React from 'react';
import './ReedSubFilter.css';

const reedStrengths = [
  { value: '1.5 | 2s | soft', label: 'Soft', strength: '1.5 | 2s', description: 'Easiest to play' },
  { value: '2.0 | 2m | mediumsoft', label: 'Medium Soft', strength: '2.0 | 2m', description: 'Good for beginners' },
  { value: '2.5 | 2h | medium', label: 'Medium', strength: '2.5 | 2h', description: 'Most popular' },
  { value: '3.0 | 3s | medium hard', label: 'Medium Hard', strength: '3.0 | 3s', description: 'Intermediate players' },
  { value: '3.5 | 3m | hard', label: 'Hard', strength: '3.5 | 3m', description: 'Advanced players' },
  { value: '4 | 3h', label: 'Extra Hard', strength: '4 | 3h', description: 'Very experienced' },
  { value: '4.5 | 4s', label: 'Super Hard', strength: '4.5 | 4s', description: 'Professional level' },
  { value: '5 | 4m/h', label: 'Ultra Hard', strength: '5 | 4m/h', description: 'Expert level' }
];

const reedAccessories = [
  { value: 'Reed Guards & Cases', label: 'Reed Guards & Cases', icon: '🛡️' }
];

const ReedSubFilter = ({ value, onChange }) => {
  const [activeTab, setActiveTab] = React.useState('strength');

  const handleStrengthSelect = (strengthValue) => {
    onChange(strengthValue);
  };

  const handleAccessorySelect = (accessoryValue) => {
    onChange(accessoryValue);
  };

  const clearFilter = () => {
    onChange('');
  };

  return (
    <div className="reed-subfilter">
      <div className="reed-subfilter__header">
        <h4 className="reed-subfilter__title">Strength
          
        </h4>
        {value && (
          <button 
            className="reed-subfilter__clear"
            onClick={clearFilter}
            aria-label="Clear filter"
          >
            Clear
          </button>
        )}
      </div>

      {/* <div className="reed-subfilter__tabs">
        <button
          className={`reed-subfilter__tab ${activeTab === 'strength' ? 'active' : ''}`}
          onClick={() => setActiveTab('strength')}
        >
          By Strength
        </button>
        <button
          className={`reed-subfilter__tab ${activeTab === 'accessories' ? 'active' : ''}`}
          onClick={() => setActiveTab('accessories')}
        >
          Accessories
        </button>
      </div> */}

      {activeTab === 'strength' && (
        <div className="reed-subfilter__content">
          <div className="reed-strength-grid">
            {reedStrengths.map((reed) => (
              <button
                key={reed.value}
                className={`reed-strength-card ${value === reed.value ? 'selected' : ''}`}
                onClick={() => handleStrengthSelect(reed.value)}
              >
                <div className="reed-strength-card__strength">{reed.strength}</div>
                <div className="reed-strength-card__label">{reed.label}</div>
                <div className="reed-strength-card__description">{reed.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'accessories' && (
        <div className="reed-subfilter__content">
          <div className="reed-accessories-list">
            {reedAccessories.map((accessory) => (
              <button
                key={accessory.value}
                className={`reed-accessory-card ${value === accessory.value ? 'selected' : ''}`}
                onClick={() => handleAccessorySelect(accessory.value)}
              >
                <span className="reed-accessory-card__icon">{accessory.icon}</span>
                <span className="reed-accessory-card__label">{accessory.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReedSubFilter;