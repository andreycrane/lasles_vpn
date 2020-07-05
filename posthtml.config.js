module.exports = {
  plugins: {
    'posthtml-include': {},
    'posthtml-expressions': {
      locals: {
        promises: [
          {
            img: '../img/dog_love_24x.svg',
            title: '24/7 Love & Care',
            text: `
              At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis
              praesentium corrupti quos dolores et quas.
            `,
          },
          {
            img: '../img/dog_vet_24x.svg',
            title: 'On-site Veterinarian',
            text: `
              Dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi
              tempora incidunt.
            `,
          },
          {
            img: '../img/dog_stream_24x.svg',
            title: 'Live-stream Cameras',
            text: `
              Quis autem vel eum iure reprehenderit qui
              in ea voluptate velit esse quam nihil molestiae
              consequatur illum.
            `,
          },
        ],
        services: [
          {
            img: '../img/services/dog_boarding_24x.svg',
            title: 'Pet Boarding (No Cages)',
            description: `
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium corrupti quos
              dolores et quas.`,
          },
          {
            img: '../img/services/dog_daycare_24x.svg',
            title: 'Pet Daycare',
            description: `
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium corrupti quos
              dolores et quas.
            `,
          },
          {
            img: '../img/services/dog_grooming_24x.svg',
            title: 'Pet Day Spa & Grooming',
            description: `
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium corrupti
              quos dolores et quas.
              `,
          },
          {
            img: '../img/services/dog_food_24x.svg',
            title: 'Custom Meal Plans',
            description: `
              At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis
              praesentium corrupti quos dolores et quas.
              `,
          },
          {
            img: '../img/services/dog_training_24x.svg',
            title: 'Pet Training',
            description: `
              At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis
              praesentium corrupti quos dolores et quas.
              `,
          },
          {
            img: '../img/services/dog_collar_24x.svg',
            title: 'Shop Our Store!',
            description: `
              At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium
              corrupti quos dolores et quas.
              `,
          },
        ],
        customers: [
          {
            img: '../img/Ellipse_2.png',
            imgWebP: '../img/Ellipse_2.webp',
            name: 'Cullen Bohannon',
            review: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore ex
              magna aliqua. Ut enim illum ad minim veniam, quis ea exercitation
              ullamco cillum ut enim dolore.
            `,
          },
          {
            img: '../img/Customer_2.png',
            imgWebP: '../img/Customer_2.webp',
            name: 'Jennifer Thomas',
            review: `
              Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi ipsam
              voluptatem aspernatur.
            `,
          },
        ],
        stats: [
          {
            img: '../img/stats/dog_duckling_24x.svg',
            prop: 'puppy baths',
            value: '3,700',
          },
          {
            img: '../img/stats/dog_house_24px.svg',
            prop: 'dogs boarded',
            value: '4,500',
          },
          {
            img: '../img/stats/dog_leash_24x.svg',
            prop: 'pups trained',
            value: '2,900',
          },
          {
            img: '../img/stats/dog_food_bowl_24x.svg',
            prop: 'meals served',
            value: '12k+',
          },
        ],
      },
    },
  },
};
