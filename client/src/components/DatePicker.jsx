import React, { useState, useEffect } from 'react';

const DatePicker = ({ onDateRangeSelect }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    // When startDate changes, calculate and set the endDate
    if (startDate) {
      const start = new Date(startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + 3); // Add 3 days to the start date to make the range 4 days including the start and end dates
      const formattedEndDate = end.toISOString().split('T')[0];
      setEndDate(formattedEndDate);

      // If a callback is provided, call it with the start and end dates
      if (onDateRangeSelect) {
        onDateRangeSelect({ startDate, endDate: formattedEndDate });
      }
    }
  }, [startDate, onDateRangeSelect]);

  return (
    <div>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </label>
      <label style={{ marginLeft: '20px' }}>
        End Date:
        <input
          type="date"
          value={endDate}
          readOnly
          style={{ padding: '10px', fontSize: '16px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#e9ecef' }}
        />
      </label>
    </div>
  );
};

export default DatePicker;
