import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import AddPost from './AddPost/AddPost';
import ShowPost from './ShowPost/ShowPost';

import styles from './Posts.module.scss';

export interface PostWithRepostsProps {
  id: number;
  content: string;
  postDate: string; // or Date if you want it to be a Date object
  author: {
    name: string;
    position: string;
  };
  reposts: Array<{
    id: number;
    repostDate: string; // or Date if you want it to be a Date object
    user: {
      name: string;
      position: string;
    };
  }>;
}

interface PostsProps {
  posts: PostWithRepostsProps[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  const location = useLocation();
  return (
    <div className={styles.posts}>
      {location.pathname.includes('/my') && <AddPost />}
      {posts?.length &&
        posts?.map((post) => (
          <ShowPost
            id={post.id}
            key={post.id}
            name={post.author.name}
            position={post.author.position}
            date={post.postDate}
            content={post.content}
          />
        ))}
    </div>
  );
};

export default Posts;
