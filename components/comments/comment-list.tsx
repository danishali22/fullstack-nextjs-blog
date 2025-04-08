import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import type { Prisma } from "@prisma/client";

type CommentListProps = {
  comments: Prisma.CommentsGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>[];
};

const CommentList : React.FC<CommentListProps> = ({comments}) => {
  return (
    <div className="space-y-8">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4">
          <Avatar>
            <AvatarImage src={comment.author.imageUrl || ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="mb-2">
              <span className="font-medium">{comment.author.name}</span>
              <span className="text-sm text-muted-foreground ml-2">{comment.createdAt.toString()}</span>
            </div>
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
