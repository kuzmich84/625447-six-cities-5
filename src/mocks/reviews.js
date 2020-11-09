import {getRandomNumber} from "../utils/utils";

export const reviews = [
  {
    id: 0,
    userAvatar: `https://www.stevensegallery.com/${getRandomNumber(70, 80)}/${getRandomNumber(70, 80)}/`,
    userName: `Max`,
    userRating: 4.8,
    textReview: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`,
  },
  {
    id: 1,
    userAvatar: `https://www.stevensegallery.com/74/${getRandomNumber(70, 80)}/`,
    userName: `Todd`,
    userRating: 4,
    textReview: `Great stay. Adorable house. Comfortable, clean, private. Nice pool for relaxation and exercise, good proximity to freeways and other neighborhoods. 
  Close to kosher restaurants and grocery stores which was a bonus for us. Any concerns that arose were addressed. Would highly recommend this house.`,
    date: `2020-09-24`,
  },
  {
    id: 2,
    userAvatar: `https://www.stevensegallery.com/74/${getRandomNumber(70, 80)}/`,
    userName: `Harold`,
    userRating: 3,
    textReview: `The location is great. House is very clean. But the host is not very responsible. It took long time to get response from the host when we had issues with the house.`,
    date: `2020-07-06`,
  },
  {
    id: 3,
    userAvatar: `https://www.stevensegallery.com/74/${getRandomNumber(70, 80)}/`,
    userName: `Tom`,
    userRating: 2,
    textReview: `Clean and comfortable. A home away from home. Lots for space both inside and out. We will be in touch with Clair again next time we all head that way.`,
    date: `2020-08-24`,
  },
];
