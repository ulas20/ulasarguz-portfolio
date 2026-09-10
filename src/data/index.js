import { tr } from './content.tr.js';
import { en } from './content.en.js';

// Yeni bir dil eklemek için:
//  1) content.<kod>.js dosyasını content.tr.js şablonuna göre oluşturun
//  2) burada import edip dictionaries + LOCALES içine ekleyin
export const dictionaries = { tr, en };

export const LOCALES = Object.keys(dictionaries);
export const DEFAULT_LOCALE = 'tr';

export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
