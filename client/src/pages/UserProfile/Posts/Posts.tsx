import { FC } from 'react';

import Scroll from '../../../common/components/Scroll/Scroll';

import AddPost from './AddPost/AddPost';
import ShowPost from './ShowPost/ShowPost';

import styles from './Posts.module.scss';

import defaultProfileImage from '../../../images/Main/defaultProfileImg.png';

interface PostProps {
  date: Date;
  content: string;
}
const posts: PostProps[] = [
  {
    date: new Date('2023-01-01'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
  {
    date: new Date(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
  {
    date: new Date('2022-10-21'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
  {
    date: new Date('2023-2-28'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
];

interface userInfoProps {
  imgPath?: string;
  name: string;
  position: string;
}

const userInfo: userInfoProps = {
  imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  name: 'Clark Mante',
  position: 'Technician',
};

const Posts: FC = () => {
  return (
    <div className={styles.box}>
      <Scroll>
        <div className={styles.posts}>
          <AddPost imgPath={userInfo.imgPath ? userInfo.imgPath : defaultProfileImage} />
          {posts.length > 0 && posts.map((post, index) => (
            <ShowPost
              key={index}
              imgPath={userInfo.imgPath ? userInfo.imgPath : defaultProfileImage}
              name={userInfo.name}
              position={userInfo.position}
              date={post.date}
              content={post.content}
            />
          ))}
        </div>
      </Scroll>
    </div>
  );
};

export default Posts;
