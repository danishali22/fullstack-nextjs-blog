"use client"

import React from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { Input } from "../ui/input";
import { searchAction } from "@/actions/search";

const ArticleSearchInput = () => {
  const searchParams = useSearchParams();
  return (
    <form action={searchAction} className="max-w-2xl mx-auto">
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
        <Input
          type="text"
          name="search"
          defaultValue={searchParams.get("search") || ""}
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 text-lg"
        />
      </div>
    </form>
  );
};

export default ArticleSearchInput;
