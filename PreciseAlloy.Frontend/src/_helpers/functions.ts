import { BasedAtomicModel } from '../_types/types';

const getModifiers = (model: BasedAtomicModel, baseClass: string) => {
  const classes = [baseClass];

  model.globalModifier?.forEach((m) => classes.push(m));
  model.styleModifier?.forEach((m) => classes.push(baseClass + '--' + m));

  if (model.theme) {
    classes.push('theme-' + model.theme);
  }

  return classes.join(' ');
};

const getCookie = (name: string) => {
  let cookies: any = {};

  document.cookie.split(';').forEach((cookie) => {
    const [name, value] = cookie.split('=');

    cookies[name.trim()] = value;
  });

  return cookies[name];
};

const generatePagingData = (numberPages: number, currentPage: number, range: number = 5) => {
  let halfRange = Math.floor(range / 2);
  let start = 0,
    end = 0;

  if (currentPage - halfRange < 1) {
    start = 1;

    end = numberPages < range ? numberPages : range;
  } else if (numberPages - halfRange < currentPage) {
    start = numberPages - range < 1 ? 1 : numberPages - range + 1;

    end = numberPages;
  } else {
    start = currentPage - halfRange;

    end = currentPage + halfRange;
  }

  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
};

const roundNumber = (num: number | boolean | undefined | string | null, numberDecimalDigit: number = 2) => {
  if (typeof num !== 'number') {
    return '';
  }

  return Number(num).toFixed(numberDecimalDigit);
};

export { getModifiers, getCookie, generatePagingData, roundNumber };

export function splitWords(s: string) {
  var re,
    match,
    output = [];
  re = /([A-Za-z]?)([a-z]+)/g;

  match = re.exec(s);
  while (match) {
    output.push([match[1].toUpperCase(), match[2]].join(''));
    match = re.exec(s);
  }

  return output;
}

export const pascalToString = (s: string) => {
  const stringSplit = splitWords(s);

  return stringSplit.join(' ');
};
