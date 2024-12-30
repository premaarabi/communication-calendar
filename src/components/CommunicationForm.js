// src/components/CommunicationForm.js
import React, { useState } from 'react';

const CommunicationForm = ({ company, onSubmit }) => {
  const [communication, setCommunication] = useState({ type: '', date: '', notes: '' });

  const handleSubmit = () => {
    onSubmit(communication);
    setCommunication({ type: '', date: '', notes: '' });
  };

  return (
    <div>
      <h3>Log Communication for {company.name}</h3>
      <form>
        <select onChange={(e) => setCommunication({ ...communication, type: e.target.value })}>
          <option value="LinkedIn Post">LinkedIn Post</option>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
        </select>
        <input type="date" value={communication.date} onChange={(e) => setCommunication({ ...communication, date: e.target.value })} />
        <textarea value={communication.notes} onChange={(e) => setCommunication({ ...communication, notes: e.target.value })}></textarea>
        <button type="button" onClick={handleSubmit}>Log Communication</button>
      </form>
    </div>
  );
};

export default CommunicationForm;
