import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Wallet',
    image: require('@site/static/img/rtm-coin.png').default,
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
        <div class="card__body">
          <div class="text--center">
          
              <h1>{title}</h1>
          
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
