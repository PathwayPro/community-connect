import {FC} from 'react';
import {useLocation} from 'react-router-dom';

import ShowRepost from "../Reposts/ShowRepost/ShowRepost";

import AddPost from './AddPost/AddPost';
import ShowPost from './ShowPost/ShowPost';

import styles from './Posts.module.scss';

export interface PostWithRepostsProps {
  id: number;
  content: string;
  postDate: string; // or Date if you want it to be a Date object
  repostDate:string;
  repostAuthor: {
    name: string;
    position: string;
    content: string;
  };
  originalAuthor: {
    name: string;
    position: string;
  };
  likesCount: number;
  repostsCount: number;
  commentsCount: number;
  reposts: Array<{
    id: number;
    repostDate: string; // or Date if you want it to be a Date object
    user: {
      name: string;
      position: string;
    };
  }>;
  type: string;
}

interface PostsProps {
  posts: PostWithRepostsProps[];
}

const Posts: FC<PostsProps> = ({posts}) => {
  const location = useLocation();
  return (
    <div className={styles.posts}>
      {location.pathname.includes('/my') || location.pathname.includes('/home') && <AddPost/>}
      {posts?.length &&
        posts?.map((post) => (
          post.type === 'repost'
            ? <ShowRepost
              id={post.id}
              key={post.id}
              repostName={post.repostAuthor.name}
              repostPosition={post.repostAuthor.position}
              repostContent={post.repostAuthor.content}
              postDate={post.postDate}
              repostDate={post.repostDate}
              originalPostAuthorName={post.originalAuthor.name}
              originalPostAuthorPosition={post.originalAuthor.position} content={post.content}
              likesCount={post.likesCount}
              repostsCount={post.repostsCount} commentsCount={post.commentsCount}/>
            : <ShowPost
              id={post.id}
              key={post.id}
              name={post.originalAuthor.name}
              position={post.originalAuthor.position}
              date={post.postDate}
              content={post.content}
              likesCount={post.likesCount}
              repostsCount={post.repostsCount}
              commentsCount={post.commentsCount}
            />
        ))}
    </div>
  );
};

export default Posts;
