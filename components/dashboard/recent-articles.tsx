import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';



const RecentArticles = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle>Recent Articles →</CardTitle>
          <Button className="text-muted-foreground" size="sm" variant={"ghost"}>
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Comments</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Title dynamic</TableCell>
              <TableCell>
                <Badge variant="secondary" className='rounded-full bg-green-100 text-green-800'>Published</Badge>
              </TableCell>
              <TableCell>2</TableCell>
              <TableCell>7 March</TableCell>
              <TableCell>
                <div className='flex gap-2'>
                    <Link href={`/dashboard/articles/${123}/edit`}>
                        <Button variant={"ghost"} size={"sm"}>Edit</Button>
                    </Link>
                    <DeleteButton />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default RecentArticles

const DeleteButton = () => {
    return (
        <form action="">
            <Button variant={"ghost"} size={"sm"} type='submit'>Delete</Button>
        </form>
    )
}