import { NextResponse } from "next/server";
import prisma from '@/prisma'

export const GET = async (req) => {

    try {
        const id = req.url.split("/blog/")[1];
        const post = await prisma.post.findFirst({
            where: { id }
        });
        if(!post)
        return NextResponse.json({ message: "Not Found" }, { status: 404 });

        return NextResponse.json({ message: "Success", post },  { status: 200 });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "GET Error ", error }, { status: 500 });
    }
};

export const PUT = async (req) => {

    try {
        const id = req.url.split("/blog/")[1];
        const {title, description, category} = await req.json()

        const post = await prisma.post.update({data: {title, description, category}, where:{id}})
        if(!post)
        return NextResponse.json({ message: "Not Found" }, { status: 404 });

        return NextResponse.json({ message: "Success", post },  { status: 200 });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "GET Error ", error }, { status: 500 });
    }
};

export const DELETE = async (req) => {

    try {
        const id = req.url.split("/blog/")[1];
        const {title, description} = await req.json()

        const post = await prisma.post.delete({ where:{ id } })
        if(!post)
        return NextResponse.json({ message: "Not Found" }, { status: 404 });

        return NextResponse.json({ message: "Success", post },  { status: 200 });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "GET Error ", error }, { status: 500 });
    }
};