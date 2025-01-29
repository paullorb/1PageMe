import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import mongoose from "mongoose";

// Define schema
const itemSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export async function GET() {
  try {
    await connectDB();
    const items = await Item.find();
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json({ error: "Failed to fetch items" }, { status: 500 });
  }
}
