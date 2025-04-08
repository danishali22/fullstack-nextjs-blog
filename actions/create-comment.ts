"use server"
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import {z} from "zod";

const createCommentSchema = z.object({
    body: z.string().min(1)
});

type CreateCommentFormState = {
    errors: {
        body?: string[],
        formErrors?: string[],
    }
}

export const createComment = async (articleId: string, previousState: CreateCommentFormState, formData: FormData) : Promise<CreateCommentFormState> => {
    const result = createCommentSchema.safeParse({body: formData.get("body")});

    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const {userId} = await auth();

    if(!userId){
        return {
            errors: {
                formErrors: ["You must be logged in to comment"]
            }
        }
    }

    const existingUser = await prisma.user.findUnique({
        where: {clerkUserId: userId}
    });

    if(!existingUser){
        return {
            errors: {
                formErrors: ["User not found. Please register before adding comment"]
            }
        }
    }

    try {
        await prisma.comments.create({
            data: {
                content: result.data.body,
                authorId: existingUser.id,
                articleId,
            }
        })
    } catch (error: unknown) {
        if(error instanceof Error){
            return {
                errors: {
                    formErrors: [error.message]
                }
            }
        }

        return {
            errors: {
                formErrors: ["Something went wrong"]
            }
        }
        
    }

    revalidatePath(`/articles/${articleId}`);

    return {errors: {}}
}