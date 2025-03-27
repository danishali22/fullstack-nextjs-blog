import EditArticlesPage from '@/components/articles/edit-article-page'
import { prisma } from '@/lib/prisma'
import React from 'react'

type EditPageProps = {
    params: Promise<{id: string}>
}

const EditPage : React.FC<EditPageProps> = async({params}) => {
    const id = (await params).id;

    const article = await prisma.articles.findUnique({
        where: {id},
    })

    if(!article) return <h1>Article not found for this {id}</h1>
  return (
    <div>
        <EditArticlesPage article={article} />
    </div>
  )
}

export default EditPage