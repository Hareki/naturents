import { StatusCodes } from 'http-status-codes';
import { getSingleDish } from '../../../backend/controllers/dish-controller';
import { connectToDB } from '../../../helpers/backend-helpers/db-helper';

async function handler(req, res) {
  const { errorMessage } = await connectToDB();
  if (errorMessage) {
    return res.status(500).json({ errorMessage });
  }

  const dishId = req.query.dishId;

  switch (req.method) {
    case 'GET':
      const response = await getSingleDish(dishId);
      const errorMessage = response.errorMessage;
      if (errorMessage) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ errorMessage });
      }

      return res.status(StatusCodes.OK).json(response);

    default:
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errorMessage: 'Method not supported' });
  }
}

export default handler;
