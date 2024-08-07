import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Facilidade e Diversão',
    Svg: require('@site/static/img/congratulates.svg').default,
    description: (
      <>
        Transforme a matemática em uma brincadeira! Nossa aplicação é fácil de usar e super divertida.
      </>
    ),
  },
  {
    title: 'Simples e intuitivo',
    Svg: require('@site/static/img/simpleAndIntuitive.svg').default,
    description: (
      <>
        Seu filho aprende matemática de forma simples e intuitiva com nossa aplicação educacional.Diga adeus à frustração! Aprender matemática de forma simples e ludica.
      </>
    ),
  },
  {
    title: 'Tornando sua aula interativa',
    Svg: require('@site/static/img/teacherClass.svg').default,
    description: (
      <>
        Descomplicamos a matemática para que você possa se concentrar no ensino.Torne suas aulas de matemática interativas
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
