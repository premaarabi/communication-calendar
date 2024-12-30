import React, { useState } from 'react';

const CompanyList = () => {
  // State for storing company data
  const [companies, setCompanies] = useState([]);
  // State for form data
  const [companyName, setCompanyName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Add a new company
  const addCompany = (e) => {
    e.preventDefault();
    if (companyName) {
      setCompanies([...companies, { name: companyName }]);
      setCompanyName('');
    }
  };

  // Edit an existing company
  const editCompany = (e) => {
    e.preventDefault();
    if (companyName && editIndex !== null) {
      const updatedCompanies = companies.map((company, index) =>
        index === editIndex ? { name: companyName } : company
      );
      setCompanies(updatedCompanies);
      setCompanyName('');
      setEditIndex(null);
    }
  };

  // Delete a company
  const deleteCompany = (index) => {
    setCompanies(companies.filter((company, i) => i !== index));
  };

  // Handle editing
  const handleEdit = (index) => {
    setCompanyName(companies[index].name);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>Company Management</h2>
      <form onSubmit={editIndex === null ? addCompany : editCompany}>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter company name"
        />
        <button type="submit">{editIndex === null ? 'Add Company' : 'Update Company'}</button>
      </form>

      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            {company.name}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteCompany(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
