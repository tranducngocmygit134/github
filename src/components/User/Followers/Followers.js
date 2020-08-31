import React from 'react';

import { GithubContext } from '../../../context/context';
import { Wrapper } from './styled';

const Followers = () => {
  const { followers } = React.useContext(GithubContext);
  const Follower = () => {
    return followers.map((follower, index) => {
      return (
        <div key={index}>
          <img src={follower.avatar_url} alt="github user" />
          <div>
            <h5>{follower.login}</h5>
            <a href={follower.html_url}>{follower.html_url}</a>
          </div>
        </div>
      );
    });
  };
  return (
    <Wrapper>
      <Follower />
    </Wrapper>
  );
};

export default Followers;
