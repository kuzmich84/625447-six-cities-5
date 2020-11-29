export const transferRatingToPercent = (rating) => {
  return Math.round(rating) * 100 / 5;
};

export const setDateToString = (datestring) => {
  const date = new Date(datestring);

  return `${date.toLocaleString(`en`, {month: `long`})} ${date.getFullYear()}`;
};

export const getRandomNumber = (min, max) => {
  return Math.round(min + Math.random() * (max - min));
};

export const toCapitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersUtils = (offers, city) => {
  return offers.filter((items) => items.city.name === toCapitalize(city));
};

export const toCamelCase = (s) => {
  return s.replace(/([-_][a-z])/ig, (symbol) => {
    return symbol.toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};


export const getOfferFavoriteStatus = (isFavorite) => {
  if (isFavorite) {
    return 0;
  } else {
    return 1;
  }
};

export const newList = (oldList, newObject) => {
  return oldList.map((object) => {
    if (object.id === newObject.id) {
      return newObject;
    }
    return object;
  });
};

export const deleteObject = (array, object) => array.filter((obj) => obj.id !== object.id);
