import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback } from '../ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

const AllArticlePage = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
        <div className="p-6">
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
              alt="Blog Image"
              fill
              className="object-cover"
            />
          </div>
          {/* Article Content  */}
          <h3 className='text-xl font-semibold'>title</h3>
          <p className="mt-2">Web Development</p>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src='' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm">Danish Ali</span>
            </div>
            <div className="text-sm">12 Feb</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AllArticlePage