import React from 'react';
import './Filters.css';

const accessoryFilters = ['All','Reed', 'Grease', 'Straps', 'Opti-Care'];

const Filters = ({ selectedSaxType, setSelectedSaxType, activeAccessory, setActiveAccessory }) => {
  return (
    <section className="filters-container">
      <div className="main-filter">
        <label htmlFor="sax-type-select">Saxophone Type:</label>
        <select 
          id="sax-type-select"
          value={selectedSaxType} 
          onChange={(e) => setSelectedSaxType(e.target.value)}
        >
          <option value="All">All</option>
          <option value="alto">Alto</option>
          <option value="tenor">Tenor</option>
          <option value="soprano">Soprano</option>
        </select>
      </div>
      <div className="quick-filters">
        <ul className="quick-filters__list">
          {accessoryFilters.map(filter => (
            <li key={filter}>
              <button 
                className={`quick-filters__button ${activeAccessory === filter ? 'active' : ''}`}
                onClick={() => setActiveAccessory(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Filters; 