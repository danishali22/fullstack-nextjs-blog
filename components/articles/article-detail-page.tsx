import { Prisma } from '@prisma/client'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import LikeButton from './like-button'
import CommentList from '../comments/comment-list'
import CommentInput from '../comments/comment-input'
import { prisma } from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'

type ArticleDetailPageProps = {
    article: Prisma.ArticlesGetPayload<{
        include: {
            author:{
                select: {
                    name: true,
                    email: true,
                    imageUrl: true,
                }
            }
        }
    }>
}

const ArticleDetailPage : React.FC<ArticleDetailPageProps> = async ({article}) => {
    const comments = await prisma.comments.findMany({
      where: { articleId: article.id },
      include: {
        author: {
          select: {
            name: true,
            email: true,
            imageUrl: true,
          },
        },
      },
    });

    const likes = await prisma.likes.findMany({
        where: {
            articleId: article.id,
        }
    });

    const { userId } = await auth();

    const user = await prisma.user.findUnique({
        where: { clerkUserId: userId || "" },
    })

    const isLiked : boolean = likes.some((like) => like.authorId === user?.id);
  return (
    <div className='min-h-screen bg-background'>
        <main className='container mx-auto py-12 px-4 sm:px-6 lg:px-6'>
            <article className='max-w-3xl mx-auto'>
                <header className='mb-12'>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        <span className='px-3 py-1 text-sm'>Web Development</span>
                    </div>
                    <h1 className='text-4xl font-bold mb-4'>Learn how to learn web development in 2025</h1>
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={article.author.imageUrl || ""} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className='font-medium'>{article.author.name}</p>
                            <p className='text-sm'>{article.createdAt.toDateString()} - 12 mins to read</p>
                        </div>
                    </div>
                </header>
                <section className='mb-12 max-w-none' dangerouslySetInnerHTML={{__html: article.content}} />

                {/* Article action button  */}
                <LikeButton articleId={article.id} isLiked={isLiked} likes={likes} />

                <CommentInput articleId={article.id} />

                {/* Comment List  */}
                <CommentList comments={comments} />
            </article>
        </main>
    </div>
  )
}

export default ArticleDetailPage