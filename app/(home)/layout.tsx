import React from "react";
import { prisma } from "../../lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  if (!user) return null;

  const loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        name: user.fullName as string,
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });
  }

  return <>{children}</>;
};

export default HomeLayout;
