import React from 'react';
import styles from './Weather.module.scss';
import Form from '../Weather/Form/Form';
import { weatherDetails } from './weatherDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IWeather } from '../../interface';
import axios from 'axios';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { GETCITY_API, WEATHER_API_KEY, WEATHER_API } from '../../API';

const Weather = () => {
  const [weather, setWeather] = React.useState<IWeather | null>(null);
  const [city, setCity] = React.useState<string>('');
  const [currentWeather, setCurrentWeather] = React.useState<string>('');

  const getCity = async () => {
    await axios(GETCITY_API).then((res) => {
      setCity(res.data.city);
    });
  };

  const getWeather = async () => {
    try {
      await axios(
        `${WEATHER_API}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      ).then((res) => setWeather(res.data));
    } catch (error: any) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    getCity();
  }, []);

  React.useEffect(() => {
    if (city) {
      getWeather();
    }
  }, [city]);

  React.useEffect(() => {
    setCurrentWeather(weather?.weather?.[0]?.main || '');
  }, [weather]);

  return (
    <div
      className={styles.cont}
      style={{
        background: `linear-gradient(${weatherDetails?.[currentWeather]?.gradient[0]}, ${weatherDetails?.[currentWeather]?.gradient[1]})`,
      }}
    >
      <Form setCity={setCity} />
      <div className={styles.half1}>
        <div className={styles.main}>
          <span className={styles.main2}>
            <FontAwesomeIcon
              icon={weatherDetails?.[currentWeather]?.icon as IconProp}
            />
          </span>
          <span className={styles.text}>
            City: {weather?.name}, {weather?.sys?.country}
          </span>
          <span className={styles.text}>
            Current temperature:{' '}
            {weather?.main?.temp && Math.round(weather?.main?.temp)}°
          </span>
          <span className={styles.text}>
            Feels like:{' '}
            {weather?.main?.feels_like && Math.round(weather?.main?.feels_like)}
            °
          </span>
          <span className={styles.text}>
            Pressure:{' '}
            {weather?.main?.pressure && Math.round(weather?.main?.pressure)}
          </span>
          <span className={styles.text}>
            Humidity:{' '}
            {weather?.main?.humidity && Math.round(weather?.main?.humidity)}
          </span>
        </div>
        <div className={styles.half2}>
          <span className={styles.text_title}>
            {weatherDetails?.[currentWeather]?.title}
          </span>
          <span className={styles.text_subtitle}>
            {weatherDetails?.[currentWeather]?.subTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
