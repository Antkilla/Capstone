import React from 'react'
import Header from '../components/Header';
import AddDealership from '../components/AddDealership';
import DealershipList from '../components/DealershipList';

const Home = () => {
  return (
    <div>
      <Header />
      <AddDealership />
      <DealershipList />
    </div>
  );
};

export default Home;