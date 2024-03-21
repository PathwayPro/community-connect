import {FC} from 'react';

import {useGetPostsQuery} from "../../app/slices/apiSlice";
import Posts from '../Posts/Posts';

const ConnectionPosts: FC = () => {
  const { data: PostsQuery } = useGetPostsQuery({});
  const preparedPosts = PostsQuery?.slice(0, 5); //just 5 posts for now
  return <Posts posts={preparedPosts} />;
};

export default ConnectionPosts;
