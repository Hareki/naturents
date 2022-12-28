import { StatusCodes } from 'http-status-codes';
import { getPromotedDishes } from '../../../backend/controllers/dish-controller';
import { connectToDB } from '../../../helpers/backend-helpers/db-helper';

async function handler(req, res) {
  const { errorMessage } = await connectToDB();
  if (errorMessage) {
    return res.status(500).json({ errorMessage });
  }

  switch (req.method) {
    case 'GET':
      const promotedDishes = await getPromotedDishes();
      return res.status(StatusCodes.OK).json(promotedDishes);

    default:
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errorMessage: 'Method not supported' });
  }
}

export default handler;
