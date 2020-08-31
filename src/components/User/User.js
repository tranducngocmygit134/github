import React from 'react';

import Card from './Card/Card';
import Followers from './Followers/Followers';
import { Wrapper } from './styled';

const User = () => {
  return (
    <section className="section">
      <Wrapper>
        <Card />
        <Followers />
      </Wrapper>
    </section>
  );
};

export default User;
