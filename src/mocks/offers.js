import {getRandomNumber} from "../utils/utils";

export const offers = [{
  id: 0,
  city: `Paris`,
  geo: [48.87834157373697, 2.3446726838258543],
  title: `Beautiful & luxurious apartment at great location`,
  images: [`/img/apartment-01.jpg`, `/img/apartment-02.jpg`, `/img/apartment-03.jpg`, `/img/room.jpg`, `/img/studio-01.jpg`],
  smallImage: `/img/room-small.jpg`,
  price: 125,
  type: `Apartment`,
  rating: 3,
  isPremium: true,
  isFavorite: true,
  bedrooms: 3,
  adults: 5,
  insideList: [`Wi-Fi`, ` Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  owner: {
    avatar: `https://www.fillmurray.com/74/${getRandomNumber(74, 80)}/`,
    name: `Angelina`,
    isPro: true,
  },
  description: [`An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
},
{
  id: 1,
  city: `Cologne`,
  geo: [50.941950338899, 6.9525559435700695],
  title: `Wood and stone place`,
  images: [`/img/apartment-02.jpg`, `/img/apartment-01.jpg`, `/img/apartment-03.jpg`, `/img/room.jpg`, `/img/studio-01.jpg`],
  smallImage: `/img/apartment-small-03.jpg`,
  price: 80,
  type: `Private room`,
  rating: 3,
  isPremium: false,
  isFavorite: true,
  bedrooms: 2,
  adults: 3,
  insideList: [`Wi-Fi`, ` Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Fridge`],
  owner: {
    avatar: `https://www.fillmurray.com/74/${getRandomNumber(70, 80)}/`,
    name: `Lisa`,
    isPro: false,
  },
  description: [`Traveling as always been a passion of mine and I am grateful for the development of vacation rentals by owners. It gave my family and I many wonderful opportunities to visit exotic places and meet fantastic people.`,
    ` Without reasonably priced accommodations we could not have afforded half of them. Today, I am the one offering a peaceful nest, helping hosts feel welcome and enthusiastic to start their new adventure among the Angelinos. God bless.`],
},
{
  id: 2,
  city: `Amsterdam`,
  geo: [52.3909553943508, 4.929309666406198],
  title: `Canal View Prinsengracht`,
  images: [`/img/apartment-03.jpg`, `/img/apartment-02.jpg`, `/img/apartment-01.jpg`, `/img/room.jpg`, `/img/studio-01.jpg`],
  smallImage: `/img/apartment-small-04.jpg`,
  price: 132,
  type: `Hotel`,
  rating: 5,
  isPremium: false,
  isFavorite: false,
  bedrooms: 4,
  adults: 6,
  insideList: [`Wi-Fi`, ` Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Fridge`],
  owner: {
    avatar: `https://www.fillmurray.com/74/${getRandomNumber(70, 80)}/`,
    name: `Max`,
    isPro: false,
  },
  description: [`This is a beautiful two (spare) bedroom house with full front and enclosed back yard.
   There are two available bedrooms with one bathroom. Technically, there are 3 bedrooms, but I am in the 3rd bedroom, and I will almost always be staying here :)
   Included is a fireplace, large tv, and full kitchen. Parking passes for the street also available upon request. There’s also an out of tune piano to play at your leisure, as well as a nice hangout area in the back with a fire pit and lounge chairs.`],
},
{
  id: 3,
  city: `Amsterdam`,
  geo: [52.3809553943508, 4.939309666406198],
  title: `Nice, cozy, warm big bed apartment`,
  images: [`/img/room.jpg`, `/img/apartment-02.jpg`, `/img/apartment-01.jpg`, `/img/apartment-03.jpg`, `/img/studio-01.jpg`],
  smallImage: `/img/apartment-small-04.jpg`,
  price: 182,
  type: `House`,
  rating: 5,
  isPremium: true,
  isFavorite: true,
  bedrooms: 5,
  adults: 8,
  insideList: [`Wi-Fi`, ` Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Fridge`],
  owner: {
    avatar: `https://www.fillmurray.com/74/${getRandomNumber(70, 80)}/`,
    name: `James`,
    isPro: true,
  },
  description: [`The Junior Suite is the perfect hide away with a modest living area, separate bedroom, and private bathroom. Each bed is luxuriously plush and fitted with crisp sheets. To make your stay as comfortable as possible the suite includes a large LCD TV, Mini Fridge, Free Wifi, locking safe, a desk, and couch for you to get comfortable. This suite also has plenty of shelving and hanging space for all of your travel essentials.`],
},
];
