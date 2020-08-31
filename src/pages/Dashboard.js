import React from 'react';

import { Info, Navbar, Repos, Search, User, Footer } from '../components/index';
import Loading from '../images/preloader.gif';
import { GithubContext } from '../context/context';

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <React.Fragment>
        <Navbar />
        <Search />
        <img src={Loading} alt="loading..." className="loading" />
        <Footer />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
