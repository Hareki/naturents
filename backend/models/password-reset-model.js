import { model, models, Schema } from 'mongoose';

const passwordResetSchema = Schema(
  {
    accountId: {
      type: Schema.Types.ObjectId,
      ref: 'Account'
    },

    token: {
      type: String,
      required: [true, 'Password reset token is required']
    },

    status: {
      type: String,
      required: [true, 'Password reset status is required'],
      enum: {
        values: ['pending', 'resolved', 'expired'],
        message: '{VALUE} is not supported'
      }
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

passwordResetSchema.virtual('expirationDate').get(function () {
  const createdAtAsMs = new Date(this.createdAt).now();
  const expirationAsMs = createdAtAsMs + 10 * 60 * 1000;
  return new Date(expirationAsMs);
});

const PasswordReset =
  models['Password-Reset'] ||
  model('Password-Reset', passwordResetSchema);
export default PasswordReset;
