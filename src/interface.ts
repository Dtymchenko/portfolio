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

export interface TodoItem {
  id: number | string;
  title: string;
  completed: boolean;
  userId?: number | string;
}

export interface TodoState {
  todos: TodoItem[];
  addOpen: boolean;
  error: string | null;
  formRef: string | null;
  addTodo: (title: string) => void;
  removeTodo: (id: number | string) => void;
  clear: () => void;
  setAddOpen: (bool: boolean) => void;
  setFormRef: (str: string) => void;
  fetchTodos: () => Promise<void>;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}