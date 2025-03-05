import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '../ui/button';
import { LayoutDashboard } from 'lucide-react';


const LeftSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <LayoutDashboard className='w-5 h-5' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <DashboardSidebar />
      </SheetContent>
    </Sheet>
  );
}

export default LeftSidebar

const DashboardSidebar = () => {
  return (
    <div className='w-full px-4 py-6'>

    </div>
  )
}