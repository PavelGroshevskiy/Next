// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from '../../types/types'
import { posts } from '../api/data/posts'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(posts)
  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify({
  //   message: req.query.message ?? 'Base'
  // }) 
  // )
}
