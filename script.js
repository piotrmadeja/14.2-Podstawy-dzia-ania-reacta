var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry. ',
    imgSrc: 'images/Harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
    imgSrc: 'images/lionking.jpg'
  },
  {
    id: 3,
    title: 'Avengers',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
    imgSrc: 'images/avengers.jpg'
  },
  {
    id: 4,
    title: 'Batman',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
    imgSrc: 'images/batman.jpg'
  },
  {
    id: 5,
    title: 'Dracula',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
    imgSrc: 'images/dracula.jpg'
  },
  {
    id: 6,
    title: 'Obcy',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
    imgSrc: 'images/alien.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      
    );
});

var posters = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('img', {src: movie.imgSrc}))
});

var element =
  React.createElement('div', {className: 'Container'},
  React.createElement('div', {className: 'Header'},
    React.createElement('h1', {}, 'Lista filmów')),
  React.createElement('div', {className: 'posters'},
    React.createElement('ul', {}, posters)),
  React.createElement('div', {className: 'description'},
    React.createElement('ul', {}, moviesElements))
    //React.createElement('ul', {}, moviesElements))
  );

ReactDOM.render(element, document.getElementById('app'));
