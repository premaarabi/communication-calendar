// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CompanyList from './components/CompanyList';
import CommunicationMethods from './components/CommunicationMethods';
import CommunicationForm from './components/CommunicationForm';
import CalendarView from './components/CalendarView';
import AnalyticsReport from './components/AnalyticsReport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/companies" element={<Company
