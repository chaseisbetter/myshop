import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [{ name: String, qty: Number, price: Number, product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } }],
  shippingAddress: { address: String, city: String, postalCode: String, country: String },
  paymentMethod: String,
  itemsPrice: Number,
  taxPrice: Number,
  shippingPrice: Number,
  totalPrice: Number,
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
