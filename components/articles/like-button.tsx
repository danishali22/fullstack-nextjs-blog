"use client"

import React, { useOptimistic, useTransition } from 'react'
import { Button } from '../ui/button';
import { Bookmark, Share2, ThumbsUp } from 'lucide-react';
import { Likes } from '@prisma/client';
import { likeDislike } from '@/actions/like-dislike';

type LikeButtonProps = {
  articleId: string,
  likes: Likes[],
  isLiked: boolean,
}

const LikeButton : React.FC<LikeButtonProps> = ({articleId, likes, isLiked}) => {
  const [optimisticLike, setOptimisticLike] = useOptimistic(likes.length);
  const [isPending, startTransition] = useTransition();

  const handleLikeDislike = async () => {
    console.log("yes")
    startTransition(async () => {
      setOptimisticLike(isLiked ? optimisticLike - 1 : optimisticLike + 1);
      await likeDislike(articleId);
    });
  }
  return (
    <div className="flex gap-4 mb-12 border-t pt-8">
      <Button disabled={isPending} onClick={handleLikeDislike} type="button" className="gap-2" variant={"ghost"}>
        <ThumbsUp className="h-5 w-5" />
          {optimisticLike}
      </Button>
      <Button type="button" className="gap-2" variant={"ghost"}>
        <Bookmark className="h-5 w-5" />
      </Button>
      <Button type="button" className="gap-2" variant={"ghost"}>
        <Share2 className="h-5 w-5" />
      </Button>
    </div>
  );
}

export default LikeButton