// import { model, models } from 'mongoose';
const { Schema, model, models } = require('mongoose');

const dishSchema = Schema(
  {
    _id: {
      type: String,
      required: [true, 'Dish Id is required']
    },

    category: {
      type: String,
      required: [true, 'Dish category is required'],
      enum: {
        values: ['Khai vị', 'Món chính', 'Tráng miệng', 'Thức uống'],
        message: '{VALUE} is not supported.'
      }
    },

    name: {
      type: String,
      required: [true, 'Dish name is required'],
      trim: true,
      unique: true
    },

    cost: {
      type: Number,
      required: [true, 'Dish cost is required'],
      min: [1, 'Dish cost must be greater than zero'],
      validate: {
        validator: function (cost) {
          return cost < this.price;
        },
        message: 'Cost must be smaller than price'
      }
    },

    price: {
      type: Number,
      required: [true, 'Dish price is required'],
      min: [1, 'Dish price must be greater than zero'],
      validate: {
        validator: function (price) {
          return price > this.cost;
        },
        message: 'Price must be greater than cost'
      }
    },

    energy: {
      type: Number,
      required: [true, 'Dish energy is required'],
      min: [1, 'Dish energy must be greater than zero']
    },

    description: {
      type: String,
      required: [true, 'Dish description is required'],
      trim: true
    },

    ingredients: {
      type: String,
      required: [true, 'Dish description is required'],
      trim: true
    },

    available: {
      type: Boolean,
      required: [true, 'Dish availability is required']
    },

    imageUrls: {
      type: [String],
      required: [true, 'Dish image url(s) are required']
    }
  },
  { timestamps: true }
);

const Dish = models?.Dish || model('Dish', dishSchema);
export default Dish;
