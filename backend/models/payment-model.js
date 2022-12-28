import { model, models, Schema } from 'mongoose';

const cardSchema = Schema({
  brand: {
    type: String,
    required: [true, 'Card brand is required'],
    enum: {
      values: ['MasterCard', 'VISA', 'JCB'],
      message: '{VALUE} is not supported'
    }
  },

  pan: {
    type: String,
    required: [true, 'Card PAN is required']
  },

  expirationMonth: {
    type: Number,
    required: [true, 'Card expiration month is required']
  },

  expirationYear: {
    type: Number,
    required: [true, 'Card expiration year is required']
  }
});

const paymentSchema = Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    ref: 'Account'
  },

  type: {
    type: String,
    enum: {
      values: ['Cash', 'Card'],
      message: '{VALUE} is not supported'
    }
  },

  card: {
    type: [cardSchema]
  }
});

const Payment = models?.Payment || model('Payment', paymentSchema);
export default Payment;
