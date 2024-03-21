import {FC, useEffect, useState} from 'react';

import {useGetUserContentQuery} from "../../app/slices/apiSlice";
import Posts from '../Posts/Posts';

const UserPosts: FC = () => {
  const [userId, setUserId] = useState<number | null>(null);
  useEffect(() => {
    const storedData = localStorage.getItem('persist:main');
    if (storedData) {
      const parsedData = JSON.parse(JSON.parse(storedData).auth);
      setUserId(parsedData?.user?.id);
    }
  }, []);

  const { data: userContent } = useGetUserContentQuery(userId, {
    skip: !userId, // Skipping the query if userId is not yet set
  });

  return <Posts posts={userContent} />;
};

export default UserPosts;
