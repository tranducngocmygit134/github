import React from 'react';

import { MdSearch } from 'react-icons/md';
import Wrapper from './styled';
import { Button } from '../styles/styledComponent';

import { GithubContext } from '../../context/context';

const Search = () => {
  const [user, setUser] = React.useState('');
  const { requests, updateUser, error, isLoading } = React.useContext(GithubContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user) {
      updateUser(user);
      setUser('');
    }
  };
  return (
    <section className="section">
      {error.show === true && <p className="flash--msg">{error.msg}</p>}
      <Wrapper>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="form-control">
            <MdSearch className="icon" />
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Enter Github User"
            />
          </div>
          {requests > 0 && !isLoading && <Button color="green">search</Button>}
        </form>
        <h3>request: {61 - requests}/60</h3>
      </Wrapper>
    </section>
  );
};

export default Search;
