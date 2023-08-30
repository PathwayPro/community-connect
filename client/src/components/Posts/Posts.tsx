import { FC } from 'react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  return (
    <div className={styles.posts}>
      {location.pathname.includes('/my') && <AddPost />}
      {posts.length &&
        posts.map((post) => (
          <ShowPost
            id={post.id}
            key={post.id}
            name={post.name}
            position={post.position}
            date={post.date}
            content={post.content}
          />
        ))}
    </div>
  );
};

export default Posts;
