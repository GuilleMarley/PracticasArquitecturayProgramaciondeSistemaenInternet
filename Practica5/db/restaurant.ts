import mongoose from "mongoose";
import { Restaurant } from "../types.ts";

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    bookings: { type: Schema.Types.ObjectId, ref: "Booking" },
  },
  { timestamps: true }
);

restaurantSchema.path("phoneNumber").validate((phone) => {
    if(phone.toString().length != 9) return false
    return true
}) ;

export type RestaurantModelType = mongoose.Document & Omit<Restaurant, "bookings" | "id">
export const RestaurantModel = mongoose.model<RestaurantModelType>("Restaurant", restaurantSchema)