"use client"

import React, { useActionState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Input } from "../ui/input";
import { createComment } from "@/actions/create-comment";
import { Button } from "../ui/button";

type CommentInputProps = {
    articleId: string;
}

const CommentInput : React.FC<CommentInputProps> = ({articleId}) => {
    const [formState, action, isPending] = useActionState(createComment.bind(null, articleId), {errors:{}})
  return (
    <form action={action} className="mb-8">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=1" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Input type="text" name="body" placeholder="Add a comment..." />
          {formState.errors.body && (
            <p className="text-red-600 text-sm mt-2">{formState.errors.body}</p>
          )}
          <div className="mt-4 flex justify-end">
            <Button type="submit" disabled={isPending}>
                {isPending ? "Adding..." : "Add Comment"}
            </Button>
          </div>
          {formState.errors.formErrors && (
            <div className="p-2 border border-red-600 bg-rd-100 text-sm mt-2">
              {formState.errors.formErrors[0]}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CommentInput;
