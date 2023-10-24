import { NextResponse } from "next/server";
import prisma from '@/prisma'
export const GET = async (req) => {

  try {
    const posts = await prisma.post.findMany();

    return NextResponse.json({message:"Sucesss", posts});
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "GET Error ", error }, { status: 500 });
  }
};


export const POST = async (req, res) => {

  try {
    const {title, description, category} = await req.json()
    const post = await prisma.post.create({data: {title, description, category}})

    return NextResponse.json({message:"Sucesss", post});
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "GET Error ", error }, { status: 500 });
  }
};

