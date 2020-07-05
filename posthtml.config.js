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
        plans: [
          {
              title: 'Free Plan',
              features: [
                'Unlimited Bandwitch',
                'Encrypted Connection',
                'No Traffic Logs',
                'Works on All Devices'
              ],
              price: 'Free',
              period: ''
          },
          {
              title: 'Standard Plan',
              features: [
                'Unlimited Bandwitch',
                'Encrypted Connection',
                'Yes Traffic Logs',
                'Works on All Devices',
                'Connect Anyware'
              ],
              price: '$9',
              period: '/ mo'
          },
          {
              title: 'Premium Plan',
              features: [
                'Unlimited Bandwitch',
                'Encrypted Connection',
                'Yes Traffic Logs',
                'Works on All Devices',
                'Connect Anyware',
                'Get New Features'
              ],
              price: '$12',
              period: '/ mo'
          },
        ],
      },
    },
  },
};
