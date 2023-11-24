import mongoose from "mongoose";
import { Booking } from "../types.ts";

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    date: { type: String, required: true },
    client: { type: Schema.Types.ObjectId, ref: "Client" },
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant"},
  },
  { timestamps: true }
);


export type BookingModelType = mongoose.Document & Omit<Booking, "id">
export const BookingModel = mongoose.model<BookingModelType>("Booking", bookingSchema)