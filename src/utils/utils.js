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

export const toCapitalize = (string)=>{
  return string[0].toUpperCase() + string.slice(1);
};


