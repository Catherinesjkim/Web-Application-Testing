import React from 'react';

const Dashboard = ({ balls, reset, strike, foul}) => {

  return (
    <div claassName="dashboard" id="brn-dashboard">
      <button onClick={hit}>Hit</button>
      <button onClick={strike}>Strike</button>
      <button onClick={ball}>Ball</button>
      <button onClick={foul}>Foul</button>
    </div>
  );
};

export default Dashboard;