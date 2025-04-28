import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'
import RSS from 'rss'

export async function GET() {
  const feed = new RSS({
    title: '椰子',
    description: '记录学习和思考的内容，分享技术、人工智能、产品设计和生活随想。',
    site_url: WEBSITE_HOST_URL,
    feed_url: `${WEBSITE_HOST_URL}/feed.xml`,
    language: 'zh-CN',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, 椰子`,
  })

  allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .forEach((post) => {
      feed.item({
        title: post.title,
        description: post.description,
        url: `${WEBSITE_HOST_URL}${post.url}`,
        date: new Date(post.date),
        categories: [post.category],
        author: '椰子',
      })
    })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}