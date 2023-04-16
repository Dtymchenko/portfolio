import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition as SolidIconDefinition } from '@fortawesome/free-solid-svg-icons';


export interface IWebShopItem {
  id: number;
  title: string;
  price: number;
  imageURL: string;
}

export interface IProject {
  name: string;
  description: string;
  URL: string;
  imageURL: string;
}

export interface IWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherDetails {
  [key: string]: {
    icon: IconDefinition | SolidIconDefinition;
    gradient: string[];
    title: string;
    subTitle: string;
  };
}