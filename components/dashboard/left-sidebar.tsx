"use client"

import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '../ui/button';
import { BarChart, FileText, LayoutDashboard, MessageCircle, Settings } from 'lucide-react';
import Link from 'next/link';


const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <SheetTrigger>
          <Button className='md:hidden m-4'>
            <LayoutDashboard className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} className='w-[250px]'>
          <DashboardSidebar />
        </SheetContent>
      </Sheet>

      <div className='hidden md:block h-screen w-[250px] border-r bg-background'>
        <DashboardSidebar />
      </div>
    </div>
  );
}

export default LeftSidebar

const DashboardSidebar = () => {
  return (
    <div className='w-full px-4 py-6'>
      <div className='flex items-center gap-2 mb-8 px-2'>
        <Link href={'/'}>
          <span className='text-xl font-bold'>ByteCode</span>
        </Link>
      </div>
      <nav>
        <Link href="/dashboard">
          <Button variant={"ghost"} className='w-full justify-start'>
            <LayoutDashboard className='w-5 h-5' />
            Overview
          </Button>
        </Link>
        <Link href="/articles">
          <Button variant={"ghost"} className='w-full justify-start'>
            <FileText className='w-5 h-5' />
            Articles
          </Button>
        </Link>
        <Link href="/comments">
          <Button variant={"ghost"} className='w-full justify-start'>
            <MessageCircle className='w-5 h-5' />
            Comments
          </Button>
        </Link>
        <Link href="/analytics">
          <Button variant={"ghost"} className='w-full justify-start'>
            <BarChart className='w-5 h-5' />
            Analytics
          </Button>
        </Link>
        <Link href="/settings">
          <Button variant={"ghost"} className='w-full justify-start'>
            <Settings className='w-5 h-5' />
            Settings
          </Button>
        </Link>
      </nav>
    </div>
  )
}