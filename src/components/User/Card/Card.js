import React from 'react';

import { Wrapper } from './styled';
import { Button } from '../../styles/styledComponent';
import { GithubContext } from '../../../context/context';
import { MdBusiness, MdLocationOn } from 'react-icons/md';

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    location,
    avatar_url,
    html_url,
    company,
    email,
    login,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt="avatar user" />
        <div>
          <h4>{login}</h4>
          <p>@{email || 'no email'}</p>
        </div>
        <a href={html_url}>
          <Button color="green" font="1.2rem" padding="3px 6px">
            follow
          </Button>
        </a>
      </header>
      <div className="links">
        <p>
          <MdBusiness className="icon" /> {company || "no company"}
        </p>
        <p>
          <MdLocationOn className="icon"/> {location || 'earth'}
        </p>
      </div>
    </Wrapper>
  );
};

export default Card;
