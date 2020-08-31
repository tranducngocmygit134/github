import React, { useContext } from 'react';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

import { GithubContext } from '../../context/context';
import { Wrapper } from './styled';

const Info = () => {
  const { githubUser } = useContext(GithubContext);
  const { followers, following, public_gists, public_repos } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: 'following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: 'gists',
      value: public_gists,
      color: 'yellow',
    },
  ];

  return (
    <section className="section">
      <Wrapper>
        {items.map((item) => {
          return <Items key={item.id} {...item} />;
        })}
      </Wrapper>
    </section>
  );
};

const Items = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

export default Info;
