import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter" 
import remarkRehype from "remark-rehype"
import rehypeSlug from 'rehype-slug'
import rehypeStringify from "rehype-stringify"
import rehypeHighlight from "rehype-highlight"
import matter from "gray-matter"
import fs from "fs"
import Onthispage from '@/components/Onthispage'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { Metadata, ResolvingMetadata } from 'next' 

 
type Props = {
  params: { slug: string, title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// https://ondrejsevcik.com/blog/building-perfect-markdown-processor-for-my-blog


export default async function BlogPage({ params }: { params: { slug: string } }) {
  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype) 
  .use(rehypeStringify) 
  .use(rehypeSlug)
  .use(rehypePrettyCode, {
    theme: "github-dark",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
  },
)
  .use(rehypeAutolinkHeadings)


const filePath = `content/${params.slug}.md`
const fileContent = fs.readFileSync(filePath, "utf-8");
const {data, content} = matter(fileContent)

const htmlContent = (await processor.process(content)).toString()
  return (
   <MaxWidthWrapper className='prose dark:prose-invert'> 
   <div className='flex '> 
    <div className='px-16'> 
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{__html: htmlContent}}></div> 
    </div>
        <Onthispage className="text-sm w-[50%]" htmlContent={htmlContent}/>
   </div>
 
   </MaxWidthWrapper>
  )
}  


export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params 
  const filePath = `content/${params.slug}.md`
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const {data} = matter(fileContent)
  return {
    title: `${data.title} - ProgrammingWithHarry`, 
    description: data.description
  }

}