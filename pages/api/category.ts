// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Video1 from '@/assets/1.mp4';
import Video2 from '@/assets/2.mp4';
import Video3 from '@/assets/3.mp4';
import Video4 from '@/assets/4.mp4';
import Video5 from '@/assets/5.mp4';
import Video6 from '@/assets/6.mp4';
import Video7 from '@/assets/7.mp4';
import Video8 from '@/assets/8.mp4';
import Video9 from '@/assets/9.mp4';

interface VideoData {
  id: string;
  src: string;
}

type CategoryItem = {
  id: string;
  title: string;
  list: VideoData[];
}

interface Category {
  hot: CategoryItem;
  recommend: CategoryItem;
  live: CategoryItem;
}

type Data = {
  data: Category
}

const videoList1: VideoData[] = [
  {
    id: '1',
    src: Video1
  },
  {
    id: '2',
    src: Video2
  },
  {
    id: '3',
    src: Video3
  },
  {
    id: '4',
    src: Video4
  },
  {
    id: '5',
    src: Video5
  },
]

const videoList2: VideoData[] = [
  {
    id: '21',
    src: Video2
  },
  {
    id: '22',
    src: Video9
  },
  {
    id: '23',
    src: Video7
  },
  {
    id: '24',
    src: Video6
  },
]

const videoList3: VideoData[] = [
  {
    id: '31',
    src: Video4,
  },
  {
    id: '32',
    src: Video8,
  },
  {
    id: '33',
    src: Video1,
  },
  {
    id: '34',
    src: Video3,
  },
  {
    id: '35',
    src: Video9,
  },
]

const dataSource: Category = {
  hot: {
    id: 'hot',
    title: '热门',
    list: videoList1,
  },
  recommend: {
    id: 'recommend',
    title: '推荐',
    list: videoList2,
  },
  live: {
    id: 'live',
    title: '直播',
    list: videoList3,
  },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // res.status(200).send({ data: dataSource })
  res.status(200).send({ name: 'src' })

}
