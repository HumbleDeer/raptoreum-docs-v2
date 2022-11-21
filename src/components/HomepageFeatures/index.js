import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Wallet',
    image: require('@site/static/img/rtm-branding/rtm-coin.png').default,
    url: '/docs/wallet/',
  },
  {
    title: 'Mining',
    image: require('@site/static/img/raptorchan/65.png').default,
    url: '',
  },
  {
    title: 'Smartnodes',
    image: require('@site/static/img/raptorchan/10.png').default,
    url: '',
  },
  {
    title: 'Papers',
    image: require('@site/static/img/raptorchan/74.png').default,
    url: '',
  },
];

function Feature({ title, image, url }) {
  return (
    <Link className={clsx('col col--3')} to={url}>
      <div class="card padding--md padding-horiz--sm shadow--xtl">
        <div class="card__header text--center">
          <img src={image} className={styles.featureImg} role="img" />
        </div>
        <div class="card__body text--center">
          <div className={styles.buttons}>
            <Link
              className="button button--block button--secondary button--md"
              to={url}>
              {title}
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 class="text--center margin-bottom--lg">Topics</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
