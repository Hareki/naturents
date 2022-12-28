/**
 * @param {String} str
 */

function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

/**
 * @param {String} name
 */

export function getDishIdByName(name) {
  const transformedName = name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
  return removeAccents(transformedName);
}
