import React from 'react'

type ArticlesDetailPageProps = {
    params: Promise<{id: string}>
}

const ArticlesDetailPage : React.FC<ArticlesDetailPageProps> = async ({params}) => {
    const id = (await params).id;
  return (
    <div>Articles Details Page - {id}</div>
  )
}

export default ArticlesDetailPage