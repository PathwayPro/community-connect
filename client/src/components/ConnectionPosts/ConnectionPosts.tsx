import {FC} from 'react';

import {useGetPostsQuery} from "../../app/slices/apiSlice";
import Posts from '../Posts/Posts';

import styles from './ConnectionPosts.module.scss';

const ConnectionPosts: FC = () => {
  const { data: PostsQuery } = useGetPostsQuery({});
  const preparedPosts = PostsQuery?.slice(0, 5); //just 5 posts for now
  return (
    <div className={styles.container}>
    <Posts posts={preparedPosts} />
    </div>
  );
};

export default ConnectionPosts;
