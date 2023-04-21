// Convert paise to amount
export const convertAmount = (amount: any, divideBy = 100) => {
  if (amount > 0) {
    return amount / divideBy;
  }

  return amount;
};

export const commaAmount = (amount: any) => {
  return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export const pointValue = (amount: any) => {
  return parseFloat(amount).toFixed(2);
};

export const commaAndPointValue = (amount: any, apply = true) => {
  if (amount > 0) {
    if (apply) {
      return commaAmount(pointValue(convertAmount(amount)));
    }
  }
  return commaAmount(pointValue(amount));
};
