"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { Button } from '../ui/button'

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const CreateArticlesPage = () => {
    const [content, setContent] = useState("");
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>Create New Article</CardHeader>
        <CardContent>
          <form action="" className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                name="title"
                placeholder="Enter a article title"
              />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <select name="category" className="flex h-10 w-full rounded-md">
                <option value="">Select category</option>
                <option value="technology">Technology</option>
                <option value="programming">Programming</option>
                <option value="web-development">Web Development</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image</Label>
              <Input
                type="file"
                id="featuredImage"
                name="featuredImage"
                accept="image/*"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="featuredImage">Content</Label>
              <ReactQuill theme="snow" value={content} onChange={setContent} />
            </div>
            <div className="flex justify-end gap-4">
                <Button type='submit' variant={"outline"}>Cancel</Button>
                <Button type="submit">Publish Article</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateArticlesPage