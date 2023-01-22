import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.image}>
          <img src="img/mehdi.jpg" width="150" height="150" />
        </div>
        <h1 className={styles.hero__title}>Mehdi Allahyari</h1>
        <p className="hero__subtitle">Principle Research Scientist</p>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/mehdiallahyari/">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/MehdiAllahyari">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className={styles.description}>
          <h4>Welcome to my website!</h4>
          <p>
            In this website, I provide a wide range of resources for those who
            are passionate about data and want to learn more about how to make
            different kinds of visualizations, particularly custom ones. My goal
            is to create a community of individuals who are interested in data
            visualization and machine learning, and want to learn more about how
            to combine these two fields.
            <br />I create tutorials and write blogs that cover a wide range of
            topics related to data visualization, from basic concepts to
            advanced techniques. I also explore how machine learning can be
            applied to data visualization, and share practical examples of how
            to use machine learning algorithms to gain insights from data.
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Data Visualization`}
      // title={`Hello from ${siteConfig.title}`}
      description="Learn data visualization with React and D3 and combine it with machine learning."
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
