import {
  faCloudBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSmog,
  faWind,
  faSun,
  faTornado,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';
import { WeatherDetails } from '../../interface';

export const weatherDetails: WeatherDetails = {
  Thunderstorm: {
    icon: faCloudBolt,
    gradient: ['#141E30', '#243B55'],
    title: 'It is complete thunderstorm!',
    subTitle: "If you are going out, don't forget umbrella!",
  },
  Drizzle: {
    icon: faCloudRain,
    gradient: ['#3a7bd5', '#3a6073'],
    title: 'The rain is not so strong',
    subTitle: "I can't believe, but some people like such weather!",
  },
  Rain: {
    icon: faCloudShowersHeavy,
    gradient: ['#000046', '#1CB5E0'],
    title: 'It rains outside',
    subTitle: 'Umbrella is necessary for sure!',
  },
  Snow: {
    icon: faSnowflake,
    gradient: ['#83a4d4', '#b6fbff'],
    title: 'Snow snow snow :)',
    subTitle: 'High time to go out and enjoy!',
  },
  Mist: {
    icon: faSmog,
    gradient: ['#606c88', '#3f4c6b'],
    title: 'Mist! Visibility is limited',
    subTitle: 'Be carefull especially if you are going to drive',
  },
  Smoke: {
    icon: faWind,
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'Smoke! Visibility is limited',
    subTitle: 'Beware of smoke, careful while driving!',
  },
  Haze: {
    icon: faSmog,
    gradient: ['#3E5151', '#DECBA4'],
    title: 'Haze! Visibility is slightly limited',
    subTitle: 'Nothing critical, just a little attention required!',
  },
  Dust: {
    icon: faTornado,
    gradient: ['#B79891', '#94716B'],
    title: 'Dusty weather, like in desert',
    subTitle: 'Protect yourself, especially nose, eyes and mouth!',
  },
  Fog: {
    icon: faSmog,
    gradient: ['#606c88', '#3f4c6b'],
    title: 'Fog! Visibility is limited',
    subTitle: 'Beware of fog, take care!',
  },
  Sand: {
    icon: faTornado,
    gradient: ['#B79891', '#94716B'],
    title: 'Weather type is sand',
    subTitle: 'I do not know even what it means!',
  },
  Ash: {
    icon: faTornado,
    gradient: ['#B79891', '#94716B'],
    title: 'It is danger of ash',
    subTitle: 'Do not go out if you do not really need!',
  },
  Squall: {
    icon: faTornado,
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'Very very strong wind',
    subTitle: 'I do not recommend to walk now!',
  },
  Tornado: {
    icon: faTornado,
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'Tornado is really dangerous',
    subTitle: 'Save yourself and your friends!',
  },
  Clear: {
    icon: faSun,
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'Clear sunny weather',
    subTitle: 'Call somebody and go out to walk!',
  },
  Clouds: {
    icon: faCloud,
    gradient: ['#757F9A', '#D7DDE8'],
    title: 'Cloudy weather 0_0',
    subTitle: 'Somebody likes, somebody not!',
  },
};
