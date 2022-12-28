import { StatusCodes } from 'http-status-codes';
import { getDishesByCategory } from '../../../backend/controllers/dish-controller';
import { connectToDB } from '../../../helpers/backend-helpers/db-helper';
import { isValidCategoryId as categoryIdExists } from '../../../helpers/category-helper';

async function handler(req, res) {
  const { errorMessage } = await connectToDB();
  if (errorMessage) {
    return res.status(500).json({ errorMessage });
  }

  const categoryId = req.query.categoryId;
  const docsPerPage = +req.query.amount;
  const pageNumber = +req.query.page;

  const message = getErrorMessage({
    categoryId,
    docsPerPage,
    pageNumber
  });

  if (message) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ errorMessage: message });
  }

  switch (req.method) {
    case 'GET':
      const response = await getDishesByCategory({
        categoryId,
        docsPerPage,
        pageNumber
      });
      const errorMessage = response.errorMessage;
      if (errorMessage) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ errorMessage });
      }

      return res.status(StatusCodes.OK).json(response);
    // await new Promise(() => {
    //   setTimeout(
    //     () => res.status(StatusCodes.OK).json(response),
    //     3000
    //   );
    // });

    default:
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errorMessage: 'Method not supported' });
  }
}

//? VALIDATOR
function getErrorMessage({ categoryId, docsPerPage, pageNumber }) {
  let errorMessage = isNotValidCategoryId(categoryId);
  if (errorMessage) return errorMessage;

  errorMessage = isNotValidDocsPerPage(docsPerPage);
  if (errorMessage) return errorMessage;

  errorMessage = isNotValidPageNumber(pageNumber);
  if (errorMessage) return errorMessage;
}

function isNotValidCategoryId(categoryId) {
  if (!categoryIdExists(categoryId)) {
    return { errorMessage: 'Invalid Category Id' };
  }
}

function isNotValidPageNumber(pageNumber) {
  if (pageNumber < 1) {
    return { errorMessage: 'Page number must be greater than zero' };
  }
}

function isNotValidDocsPerPage(docsPerPage) {
  if (docsPerPage < 1) {
    return {
      errorMessage: 'Documents per page must be greater than zero'
    };
  }
}

export default handler;
