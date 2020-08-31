import React, { useState, useEffect } from 'react';
import axios from 'axios';

import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';

const rooturl = 'https://api.github.com';
const GithubContext = React.createContext();

// Provider, consumer - GithubContext
const GithubProvider = (props) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // request
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const checkRequest = () => {
    axios(`${rooturl}/rate_limit`)
      .then((reqRate_limit) => {
        let {
          rate: { remaining },
        } = reqRate_limit.data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError({
            show: true,
            msg: 'sorry, you have exceed rate limit, try again',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleError = (show, msg) => {
    setError(show, msg);
  };

  const updateUser = async (userName) => {
    try {
      setIsLoading(true);
      let user = axios(`${rooturl}/users/${userName}`);
      let repo = axios(`${rooturl}/users/${userName}/repos?per_page=100`);
      let follow = axios(`${rooturl}/users/${userName}/followers?per_page=100`);
      [user, repo, follow] = await Promise.all([user, repo, follow]);
      setGithubUser(user.data);
      setRepos(repo.data);
      setFollowers(follow.data);
      toggleError({ show: false, msg: '' });
      checkRequest();
      setIsLoading(false);
    } catch (err) {
      toggleError({ show: true, msg: 'User not found' });
    }
  };

  useEffect(checkRequest, []);

  return (
    <GithubContext.Provider
      value={{ githubUser, updateUser, repos, followers, requests, error, isLoading }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
