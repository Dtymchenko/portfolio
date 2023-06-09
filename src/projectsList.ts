import { IProject } from './interface';

export const projects: IProject[] = [
  {
    name: 'Web Shop',
    description:
      'Web Shop. Used content loader, basket available only when you login. Body scroll disable on basket opened.',
    URL: 'webshop',
    imageURL: '/img/webshop.png',
  },
  {
    name: 'Weather',
    description:
      'Weather App. Default is your location, enter any other city to get weather in it.',
    URL: 'weather',
    imageURL: '/img/weather.png',
  },
  {
    name: 'Random Color',
    description:
      'On load generates random color if unlocked. Also puts it in address line, so you can share it.',
    URL: 'random-color',
    imageURL: '/img/random-color.png',
  },
  {
    name: 'ToDo List',
    description:
      'Yes, I also made such thing :). Saves it also to local storage. Zustand state manager.',
    URL: 'todo-list',
    imageURL: '/img/todolist.png',
  },
  {
    name: 'AutoComplete',
    description:
      'Working with Regular Expressions. We get list of users and when we type in input - users list is filtered and highlighted',
    URL: 'autocomplete',
    imageURL: '/img/autocomplete.png',
  },
  {
    name: 'Converter',
    description:
      'Currency converter between UAH, USD and EUR. Gets current rates from NBU API.',
    URL: 'converter',
    imageURL: '/img/converter.png',
  },
  {
    name: 'List of Articles',
    description:
      'Test CodeBridge - we get list of articles with brief description, on click we can visit page with detail description. Also there is search and highlight found words.',
    URL: 'articles',
    imageURL: '/img/articles.png',
  },
  {
    name: 'Users Filtration',
    description:
      'We get list of users from API and we can sort and filter this list. Also we can click on user and see detail information',
    URL: 'users-filter',
    imageURL: '/img/users-filter.png',
  },
  {
    name: 'Just CSS - single page',
    description: 'Single page, just adaprive CSS with no JS.',
    URL: 'style-css',
    imageURL: '/img/style-css.png',
  },
  {
    name: 'Intersection observer',
    description:
      'Practising work with intersection observer. Video stop playin when it is out of your screen. Anchors on the page. Endless scroll.',
    URL: 'intersection-observer',
    imageURL: '/img/intersection-observer.png',
  },
  {
    name: 'Progressive Image',
    description: 'Practising work with progressive image loading.',
    URL: 'progressive-image',
    imageURL: '/img/progressive-image.png',
  },
  {
    name: 'Relative Time format',
    description:
      'Enter date and see how long ago it was or how soon it will be.',
    URL: 'relative-time-format',
    imageURL: '/img/relative-time-format.png',
  },
];
