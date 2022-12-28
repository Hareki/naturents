import { model, models, Schema } from 'mongoose';

const itemSchema = Schema({
  dishId: {
    type: String,
    ref: 'Dish'
  },

  quantity: {
    type: Number,
    required: [true, 'Item quantity is required'],
    min: [1, 'Item quantity must be greater than zero']
  }
});

const cartSchema = Schema(
  {
    accountId: {
      type: Schema.Types.ObjectId,
      ref: 'Account'
    },

    items: {
      type: [itemSchema],
      required: true
    }
  },
  { timestamps: true }
);

const Cart = models?.Cart || model('Cart', cartSchema);
export default Cart;
