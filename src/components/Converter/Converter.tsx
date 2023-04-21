import React from 'react';
import styles from './Converter.module.scss';
import axios from 'axios';
import Input from './Input/Input';
import { ICurrency } from '../../interface';

const Converter = () => {
  const [date, setDate] = React.useState("");
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  React.useEffect(() => {
    async function getData() {
      const response = await axios<ICurrency[]>(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
      ).catch((err) => {
        console.warn(err);
        alert('Not received info');
      });
      if (response) {
        const actualData = response.data
        const findUSD = actualData.find(
          (obj) => obj['cc'].toLowerCase() === 'usd'
        );
        const findEUR = actualData.find(
          (obj) => obj['cc'].toLowerCase() === 'eur'
        );
        setValue1(findUSD?.rate || 0);
        setValue2(findEUR?.rate || 0);
        setDate(findUSD?.exchangedate || "");
      }
    }
    getData();
  }, []);

  const rates = {
    UAH: 1,
    USD: value1,
    EUR: value2,
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h2>Official Currency Rates by National Bank of Ukraine</h2>
        <h3>Stated for {date}</h3>
        <div className={styles.currency_rate_block}>
          <div className={styles.currency_rate_number}>
            {value1} UAH per 1 USD
          </div>
          <div className={styles.divider}></div>
          <div className={styles.currency_rate_number}>
            {value2} UAH per 1 EUR
          </div>
        </div>
      </header>
      <Input value1={value1} rates={rates} />
    </div>
  );
};

export default Converter;
