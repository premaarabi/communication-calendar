// src/components/Dashboard.js
import React, { useState } from 'react';

const Dashboard = () => {
  const [companies, setCompanies] = useState([
    { name: 'Company A', lastCommunications: ['LinkedIn Post - 5th September'], nextCommunication: 'LinkedIn Message - 10th October' },
    { name: 'Company B', lastCommunications: ['Email - 1st September'], nextCommunication: 'Phone Call - 15th October' }
  ]);

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last 5 Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.lastCommunications.join(', ')}</td>
              <td>{company.nextCommunication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
