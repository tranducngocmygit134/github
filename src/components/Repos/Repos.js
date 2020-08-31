import React from 'react';

import { GithubContext } from '../../context/context';
import { Pie3D, Doughnut2D, Bar3D, Column2D } from '../Charts/index';

import { Wrapper } from './styled';
const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  const datas = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) {
      return total;
    }
    if (!total[language]) {
      total[language] = { label: language, value: 1, star: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        star: total[language].star + stargazers_count,
      };
    }
    return total;
  }, {});
  let { mostPopular, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.mostPopular[stargazers_count] = {
        label: name,
        value: stargazers_count,
      };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      mostPopular: {},
      forks: {},
    }
  );
  mostPopular = Object.values(mostPopular).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  const languageData = Object.values(datas).map((language) => {
    return { ...language };
  });
  const starData = Object.values(datas).map((star) => {
    return { ...star, value: star.star };
  });

  return (
    <section className="section">
      <Wrapper>
        <Pie3D data={languageData} />
        <Bar3D data={mostPopular} />
        <Doughnut2D data={starData} />
        <Column2D data={forks} />
      </Wrapper>{' '}
    </section>
  );
};

export default Repos;
