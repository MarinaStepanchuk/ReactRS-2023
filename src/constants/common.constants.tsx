const Paths = {
  main: {
    path: '/',
    title: 'Main',
  },
  about: {
    path: '/about',
    title: 'About Us',
  },
  error: {
    path: '*',
    title: 'Error',
  },
};

const Buttons = {
  search: 'SEARCH',
};

const Content = {
  rating: 'Rating: ',
  greeting: 'Enter the movie you are looking for, search by any characteristics.',
  about:
    " is a unique movie search platform. Here you'll find a movie or cartoon for every taste. We take care of adding new releases as soon as they are released. Use our search to find a movie to enjoy tonight.",
  appName: 'MovieSearch',
};

const Pages = {
  main: 'Main',
  about: 'About Us',
  error: '404 Page not found',
};

const LocalStorageKeys = {
  search: 'search',
};

export { Paths, Buttons, Content, Pages, LocalStorageKeys };
