import React from 'react';

const Dashboard = ({ balls, reset, strikes, foul}) => {

  return (
    <div className="dashboard" id="brn-dashboard">
      <button onClick={reset}>Hit</button>
      <button onClick={strikes}>Strike</button>
      <button onClick={balls}>Ball</button>
      <button onClick={foul}>Foul</button>
    </div>
  );
};

export default Dashboard;