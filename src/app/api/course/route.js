import Course from "@/app/model/course";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const course = await Course.find();

    return NextResponse.json({ course }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}