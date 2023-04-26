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

export interface ICurrency {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

export interface IArticle {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: Date | string;
  updatedAt: Date | string;
  featured: boolean;
  launches: [];
  events: [];
}

export interface IUserFilter {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: string,
  email: string,
  phone: string,
  username: string,
  password: string,
  birthDate: Date | string,
  image: string,
  bloodGroup: string,
  height: number,
  weight: number,
  eyeColor: string,
  hair: {
      color: string,
      type: string,
  }
  domain: string,
  ip: string,
  address: {
      address: string,
      city: string,
      coordinates: {
          lat: number,
          lng: number,
      }
      postalCode: string,
      state: string,
  }
  macAddress: string,
  university: string,
  bank: {
      cardExpire: string,
      cardType: string,
      currency: string,
      iban: string,
      cardNumber: string,
  }
  company: {
      address: {
          city: string,
          address: string,
          coordinates: {
              lng: number
              lat: number,
          }
          state: string,
          postalCode: string,
      }
      name: string,
      title: string,
      department: string,
  }
  ssn: string,
  userAgent: string,
  ein: string,
}
