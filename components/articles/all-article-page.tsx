import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Search } from "lucide-react";
import type { Prisma } from "@prisma/client";

type AllArticlePageProps = {
  articles: Prisma.ArticlesGetPayload<{
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

const AllArticlePage: React.FC<AllArticlePageProps> = async ({
  articles,
}) => {
  if (!articles || articles.length === 0) {
    return <NoSearchResult />
  }
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Card
          key={article.id}
          className="group relative overflow-hidden transition-all hover:shadow-lg"
        >
          <div className="p-6">
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
              <Image
                src={article.featuredImage}
                alt="Blog Image"
                fill
                className="object-cover"
              />
            </div>
            {/* Article Content  */}
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="mt-2">{article.category}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={article.author.imageUrl} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm">{article.author.name}</span>
              </div>
              <div className="text-sm">{article.createdAt.toDateString()}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllArticlePage;

const NoSearchResult = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 rounded-full bg-muted p-4">
        <Search className="h-8 w-8" />
      </div>
      <h1 className="font-bold text-4xl">No Result Found</h1>
      <p className="mt-4 text-md">
        We could not find any articles matching your search. Please try again
        with different keywords.
      </p>
    </div>
  );
};
