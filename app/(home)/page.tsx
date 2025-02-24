import { BlogFooter } from "@/components/home/BlogFooter";
import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticles from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <section className="relative py-16 md:py-24">
        <div className="conatainer mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Articles
            </h2>
            <p>Discover our popular and trending content</p>
          </div>
          <TopArticles />
          <div className="text-center mt-12">
            <Link href={"/articles"}>
              <Button className="rounded-full hover:bg-gray-900 hover:text-white dark:bg-white dark:hover:text-gray-900">View all articles</Button>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter />
    </main>
  );
};

export default Home;
