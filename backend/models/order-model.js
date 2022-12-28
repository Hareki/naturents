import { model, models, Schema } from 'mongoose';
import { phoneRegex } from '../../helpers/regex-helper';

const itemSchema = Schema({
  dishId: {
    type: String,
    ref: 'Dish'
  },

  quantity: {
    type: Number,
    required: [true, 'Item quantity is required'],
    min: [1, 'Item quantity must be greater than zero']
  },

  unitPrice: {
    type: Number,
    required: [true, 'Item unit price is required'],
    min: [1, 'Item unit price must be greater than zero']
  }
});

const orderSchema = Schema(
  {
    accountId: {
      type: Schema.Types.ObjectId,
      ref: 'Account'
    },

    paymentId: {
      type: Schema.Types.ObjectId,
      ref: 'Payment'
    },

    status: {
      type: String,
      required: [true, 'Order status is required'],
      enum: {
        values: ['pending', 'processing', 'shipping'],
        message: '{VALUE} is not supported.'
      }
    },

    items: {
      type: [itemSchema],
      required: true
    },

    profit: {
      type: Number,
      required: [true, 'Order profit is required'],
      min: [1, 'Order profit must be greater than zero']
    },

    address: {
      type: String,
      required: [true, 'Order address is required'],
      trim: true
    },

    phoneNumber: {
      type: String,
      required: [true, 'Order phone number is required'],
      trim: true,
      validate: {
        validator: (value) => value && phoneRegex.test(value),
        message: 'Invalid phone number format'
      }
    },

    note: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

const Order = models?.Order || model('Order', orderSchema);
export default Order;
