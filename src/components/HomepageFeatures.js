import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Platform' ,
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Please <Link to="/docs/intro"> explore</Link> this section for platform specific information, 
        how to use examples and walk thorugh tutorials. 
        
      </>
      
    ),
  },
  {
    title: 'Code',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Please <Link to="/docs/intro"> explore </Link> this section to figure out scripting details and 
        review how to code platform specific extensions such as indicators, strategies and more.
      </>
    ),
  },
  {
    title: 'Support',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Feel free to submit a ticket or talk to our virtual asistant is you are having trouble with the platform.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
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
