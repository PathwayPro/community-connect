import { FC } from 'react';

import Posts, { PostProps } from '../Posts/Posts';

const posts: PostProps[] = [
  {
    id: 1,
    name: 'Clark Mante',
    position: 'Technician',
    date: new Date(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
  {
    id: 2,
    name: 'Clark Mante',
    position: 'Technician',
    date: new Date('2023-01-01'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
  {
    id: 3,
    name: 'Clark Mante',
    position: 'Technician',
    date: new Date('2022-10-21'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
  {
    id: 4,
    name: 'Clark Mante',
    position: 'Technician',
    date: new Date('2023-2-28'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
];

const UserPosts: FC = () => {
  // TODO: fetch data

  return <Posts posts={posts} />;
};

export default UserPosts;
