import { connectToDB } from '../../helpers/backend-helpers/db-helper';
import { getTotalPagesNumber } from '../../helpers/backend-helpers/pagination-helper';
import {
  CategoryName,
  getCategoryNameById
} from '../../helpers/category-helper';
import Dish from '../models/dish-model';

const ignoredFields = {
  createdAt: 0,
  updatedAt: 0,
  __v: 0
};

export async function getDishesByCategory({
  categoryId,
  docsPerPage,
  pageNumber,
  prerender = false
}) {
  const categoryName = getCategoryNameById(categoryId);
  const { errorMessage } = await connectToDB();
  if (errorMessage) {
    return { errorMessage };
  }

  const filter = {
    category: categoryName
  };
  const totalPageNumber = await getTotalPagesNumber({
    docsPerPage,
    filter,
    collection: Dish
  });
  if (pageNumber > totalPageNumber)
    return {
      errorMessage: 'Page number can not exceed total pages number'
    };

  const nextPageNumber =
    pageNumber + 1 > totalPageNumber ? -1 : pageNumber + 1;

  const dishes = await Dish.find(
    { category: categoryName },
    ignoredFields
  )
    .skip(docsPerPage * (pageNumber - 1))
    .limit(docsPerPage);

  if (prerender) {
    return {
      pages: [{ dishes, nextPageNumber: nextPageNumber }],
      pageParams: [1]
    };
  } else return { dishes, nextPageNumber: nextPageNumber };
}

export async function getPromotedDishes() {
  const { errorMessage } = await connectToDB();
  if (errorMessage) {
    return { errorMessage };
  }

  const response = {};

  for (const id in CategoryName) {
    response[id] = await Dish.find(
      { category: CategoryName[id] },
      ignoredFields
    )
      .sort({ createdAt: -1 })
      .limit(4);
  }
  return response;
}

export async function getSingleDish(dishId) {
  const { errorMessage } = await connectToDB();
  if (errorMessage) {
    return { errorMessage };
  }

  const dishDetails = await Dish.findById(dishId, ignoredFields);
  if (!dishDetails) {
    return { errorMessage: 'No dishes with this Id found' };
  }
  return dishDetails;
}
