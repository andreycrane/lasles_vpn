module.exports = {
  plugins: {
    'posthtml-include': {},
    'posthtml-expressions': {
      locals: {
        features: [
          {
            img: '../img/user.svg',
            title: '90+',
            text: 'User',
          },
          {
            img: '../img/location.svg',
            title: '30+',
            text: 'Locations',
          },
          {
            img: '../img/Server.svg',
            title: '50+',
            text: 'Servers',
          },
        ],
        plans: [
          {
            title: 'Free Plan',
            features: [
              'Unlimited Bandwitch',
              'Encrypted Connection',
              'No Traffic Logs',
              'Works on All Devices',
            ],
            price: 'Free',
            period: '',
          },
          {
            title: 'Standard Plan',
            features: [
              'Unlimited Bandwitch',
              'Encrypted Connection',
              'Yes Traffic Logs',
              'Works on All Devices',
              'Connect Anyware',
            ],
            price: '$9',
            period: '/ mo',
          },
          {
            title: 'Premium Plan',
            features: [
              'Unlimited Bandwitch',
              'Encrypted Connection',
              'Yes Traffic Logs',
              'Works on All Devices',
              'Connect Anyware',
              'Get New Features',
            ],
            price: '$12',
            period: '/ mo',
          },
        ],
        sponsors: [
          '../img/netflix.svg',
          '../img/reddit.svg',
          '../img/amazon.svg',
          '../img/discord.svg',
          '../img/spotify.svg',
        ],
        customers: [
          {
            picture: '../img/customer_1.png',
            name: 'Viezh Robert',
            location: 'Warsaw, Poland',
            review: `
              “Wow... I am very happy to use this VPN, it turned
              out to be more than my expectations and so far there
              have been no problems. LaslesVPN always the best”.
            `,
            rating: '4.5',
          },
          {
            picture: '../img/customer_2.png',
            name: 'Yessica Christy',
            location: 'Shanxi, China',
            review: `
              “I like it because I like to travel far
              and still can connect with high speed.”.
            `,
            rating: '4.5',
          },
          {
            picture: '../img/customer_3.png',
            name: 'Kim Young Jou',
            location: 'Seoul, South Korea',
            review: `
              “This is very unusual for my business
              that currently requires a virtual private
              network that has high security.”.
            `,
            rating: '4.5',
          },
        ],
      },
    },
  },
};
