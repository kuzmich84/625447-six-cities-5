export const transferRatingToPercent = (rating) => {
  return rating * 100 / 5;
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


