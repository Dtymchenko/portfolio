import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  value1: number;
  rates: {
    [key: string]: number;
  };
}

const Input = ({ value1, rates }: InputProps) => {
  const [input1, setInput1] = React.useState<number>(1);
  const [input2, setInput2] = React.useState<number>(0);
  const [fromCurrency, setFromCurrency] = React.useState<string>('USD');
  const [toCurrency, setToCurrency] = React.useState<string>('UAH');

  React.useEffect(() => {
    setInput2(Number((input1 * value1).toFixed(2)));
  }, [value1]);

  const onChangeFromValue = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput1(Number(e.target.value));
      setInput2(
        Number(
          (
            (Number(e.target.value) * rates[fromCurrency]) /
            rates[toCurrency]
          ).toFixed(2)
        )
      );
    },
    [rates, fromCurrency, toCurrency]
  );

  const onChangeToValue = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput2(Number(e.target.value));
      setInput1(
        Number(
          (
            (Number(e.target.value) / rates[fromCurrency]) *
            rates[toCurrency]
          ).toFixed(2)
        )
      );
    },
    [rates, fromCurrency, toCurrency]
  );

  const onChangeFromCurrency = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFromCurrency(e.target.value);
      setInput2(
        Number(
          ((input1 * rates[e.target.value]) / rates[toCurrency]).toFixed(2)
        )
      );
    },
    [input1, rates, toCurrency]
  );

  const onChangeToCurrency = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setToCurrency(e.target.value);
      const convertedValue =
        (input2 / rates[fromCurrency]) * rates[e.target.value];
      setInput1(Number(convertedValue.toFixed(2)));
    },
    [input2, rates, fromCurrency]
  );

  return (
    <div className={styles.main_block}>
      <h1>Currency Converter</h1>
      <div className={styles.main_item}>
        <input
          className={styles.input}
          type="number"
          value={input1}
          onChange={onChangeFromValue}
        ></input>
        <select
          className={styles.select}
          value={fromCurrency}
          onChange={onChangeFromCurrency}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div className={styles.converter_main_item}>
        <input
          className={styles.input}
          type="number"
          value={input2}
          onChange={onChangeToValue}
        ></input>
        <select
          className={styles.select}
          value={toCurrency}
          onChange={onChangeToCurrency}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
