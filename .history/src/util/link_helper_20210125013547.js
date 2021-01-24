import validator from 'validator';
export function linkHandle(link) {
  if (!validator.isURL(link)) {
    return 'https:/google.com';
  } else {
    if (!link.startsWith('http')) {
      link = 'https://'.concat(link);
    }
  }
}
