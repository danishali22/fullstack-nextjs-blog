"use server"

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const likeDislike = async (articleId: string) => {
    const {userId} = await auth();
    if(!userId){
        throw new Error("You must be logged in to like an article");
    }

    const user = await prisma.user.findUnique({
        where: { clerkUserId: userId },
    });

    if(!user) {
        throw new Error("User not found");
    }

    const existingLike = await prisma.likes.findFirst({
        where: {
            articleId,
            authorId: user.id,
        }
    });

    if(existingLike){
        // dislike
        await prisma.likes.delete({
            where: {
                id: existingLike.id,
            }
        })
    }
    else {
        // like 
        await prisma.likes.create({
            data: {
                articleId,
                authorId: user.id,
            }
        })
    }

    revalidatePath(`/articles/${articleId}`);
}