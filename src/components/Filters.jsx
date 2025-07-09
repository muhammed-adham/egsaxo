import React from 'react';
import './Filters.css';
import ReedSubFilter from './ReedSubFilter';

const accessoryFilters = ['All','Reed','Straps','Care & Protection'];

const Filters = ({ selectedSaxType, setSelectedSaxType, activeAccessory, setActiveAccessory }) => {
  const [selectedReedSubFilter, setSelectedReedSubFilter] = React.useState('');

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
        {activeAccessory === 'Reed' && (
          <ReedSubFilter value={selectedReedSubFilter} onChange={setSelectedReedSubFilter} />
        )}
      </div>
    </section>
  );
};

export default Filters; 