import { model, models, Schema } from 'mongoose';

const testSchema = Schema(
  {
    name: {
      type: String,
      required: true
    },

    quantity: {
      type: Number,
      min: [1, 'Item quantity must be greater than zero'],
      required: [true, 'Item quantity is required']
    },

    cost: {
      type: Number,
      min: [1, 'Cost must be greater than zero'],
      required: [true, 'Cost is required']
    },

    randomArr: {
      type: [Number],
      required: true
    }
  },
  { timestamps: true }
);

const Test = models?.Test || model('Test', testSchema);
export default Test;
