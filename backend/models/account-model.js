import bcrypt from 'bcryptjs';
import { model, models, Schema } from 'mongoose';
import validator from 'validator';
import { phoneRegex } from '../../helpers/regex-helper';

const accountSchema = Schema({
  profilePicture: String,
  fullName: {
    type: String,
    required: [true, 'User full name is required'],
    trim: true
  },

  email: {
    type: String,
    required: [true, 'User email is required'],
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email format'
    },
    unique: true,
    lowercase: true,
    trim: true
  },

  emailVerified: {
    type: Boolean,
    required: true
  },

  phoneNumber: {
    type: String,
    required: [true, 'User phone number is required'],
    trim: true,
    validate: {
      validator: (value) => value && phoneRegex.test(value),
      message: 'Invalid phone number format'
    }
  },

  address: {
    type: String,
    required: [true, 'User address is required'],
    trim: true
  },

  encryptedPassword: {
    type: String,
    required: [true, 'User password is required'],
    select: false
  },

  role: {
    type: String,
    required: true,
    enum: {
      values: ['client', 'admin'],
      message: '{VALUE} is not supported.'
    },
    default: 'client'
  }
});

accountSchema.methods.isCorrectPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Account = models?.Account || model('Account', accountSchema);
export default Account;
