module.exports = {
  plugins: {
    'posthtml-include': {},
    'posthtml-expressions': {
      locals: {
        features: [
          {
            img: '../img/user.svg',
            title: '90+',
            text: 'User'
          },
          {
            img: '../img/location.svg',
            title: '30+',
            text: 'Locations'
          },
          {
            img: '../img/Server.svg',
            title: '50+',
            text: 'Servers'
          }
        ],
      },
    },
  },
};
