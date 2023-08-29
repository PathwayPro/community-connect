import { FC } from 'react';

import Posts, { PostProps } from '../Posts/Posts';

const posts: PostProps[] = [
  {
    id: 1,
    name: 'Niloofar Karyar',
    position: 'UI/UX Designer',
    date: new Date(),
    content: 'I derive immense pleasure from collaborating with my team.',
  },
  {
    id: 2,
    name: 'Felipe Considine',
    position: 'Planner',
    date: new Date('2023-08-10'),
    content: 'Tempora dicta maxime accusantium ea dolor saepe dicta.',
  },
  {
    id: 3,
    name: 'Melba Turner',
    position: 'Producer',
    date: new Date('2022-08-09'),
    content: 'Impedit ea qui maxime sed veniam vel eaque. Ipsa cupiditate corrupti quos maxime qui.',
  },
  {
    id: 4,
    name: 'Irvin Farrell DDS',
    position: 'Administrator',
    date: new Date('2023-08-08'),
    content: 'Debitis repellendus dolores suscipit quo. Rerum iste voluptas eum debitis temporibus ut.',
  },
  {
    id: 5,
    name: 'Constance Ward III',
    position: 'Coordinator',
    date: new Date('2023-08-07'),
    content: 'Consequatur non non omnis et.',
  },
];

const ConnectionPosts: FC = () => {
  // TODO: fetch data

  return <Posts posts={posts} />;
};

export default ConnectionPosts;
