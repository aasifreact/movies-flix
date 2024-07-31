import React from 'react';
import '../components/YearFilter.css';

const YearFilter = ({ selectedYear, onSelectYear }) => {
    const currentYear = new Date().getFullYear();
    const years = ["All Time", ...Array.from({ length: currentYear - 2000 + 1 }, (_, i) => currentYear - i)];
  
    return (
      <div className="year-filter">
        <select
          value={selectedYear}
          onChange={(e) => onSelectYear(e.target.value)}
          className="year-filter-select"
        >
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default YearFilter;