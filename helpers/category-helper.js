export const CategoryId = {
  appetizers: 'appetizers',
  'main-dishes': 'main-dishes',
  desserts: 'desserts',
  drinks: 'drinks'
};
Object.freeze(CategoryId);

export const CategoryName = {
  appetizers: 'Khai vị',
  'main-dishes': 'Món chính',
  desserts: 'Tráng miệng',
  drinks: 'Thức uống'
};
Object.freeze(CategoryName);

//? GETTERS
export function getCategoryNameById(id) {
  return CategoryName[id];
}

export function getCategoryIdByName(name) {
  for (const categoryId in CategoryName) {
    if (CategoryName[categoryId] === name) return categoryId;
  }
}

//? VALIDATORS
export function isValidCategoryName(name) {
  for (const property in CategoryName) {
    if (name === CategoryName[property]) return true;
  }
  return false;
}

export function isValidCategoryId(id) {
  for (const property in CategoryId) {
    if (id === CategoryId[property]) return true;
  }
  return false;
}
