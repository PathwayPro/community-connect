import { FC } from 'react';

import AddPost from './AddPost/AddPost';
import ShowPost from './ShowPost/ShowPost';

import styles from './Posts.module.scss';

export interface PostProps {
  id: number;
  name: string;
  position: string;
  date: Date;
  content: string;
}

interface PostsProps {
  posts: PostProps[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div className={styles.posts}>
      <AddPost />
      {posts.length &&
        posts.map((post) => (
          <ShowPost key={post.id} name={post.name} position={post.position} date={post.date} content={post.content} />
        ))}
    </div>
  );
};

export default Posts;
