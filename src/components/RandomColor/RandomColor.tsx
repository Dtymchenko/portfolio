import React from 'react';
import styles from './RandomColor.module.scss';
import Button from './Button/Button';
import Section from './Section/Section';

const RandomColor = () => {
  const quantity = 5;
  const tempArr = new Array(quantity).fill('');
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [colors, setColors] = React.useState(new Array(quantity).fill(null));
  const [load, setLoad] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <Button setLoad={setLoad} />
      <div className={styles.sections}>
        {tempArr.map((el, i) => (
          <Section
            quantity={quantity}
            key={i}
            i={i}
            load={load}
            setColors={setColors}
            colors={colors}
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
          />
        ))}
      </div>
    </div>
  );
};

export default RandomColor;
