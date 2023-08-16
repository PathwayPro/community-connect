import { FC } from 'react';

import Scroll from '../../../common/components/Scroll/Scroll';

import AddPost from './AddPost/AddPost';
import ShowPost, { ShowPostProps } from './ShowPost/ShowPost';

import styles from './Posts.module.scss';

import defaultProfileImage from '../../../images/Main/defaultProfileImg.png';

const posts: ShowPostProps[] = [
  {
    imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    name: 'Clark Mante',
    position: 'Technician',
    date: new Date('2023-01-01'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
  {
    imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    name: 'Clark Mante',
    position: 'Technician',
    date: new Date(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
  {
    imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    name: 'Clark Mante',
    position: 'Technician',
    date: new Date('2022-10-21'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
  {
    imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    name: 'Clark Mante',
    position: 'Technician',
    date: new Date('2023-2-28'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl tincidunt nunc, quis aliquet nisl nunc quis nisl.',
  },
];

interface PostsProps {
  myProfile: boolean;
}
const Posts: FC<PostsProps> = ({
  myProfile,
}) => {

const image = posts[0].imgPath ? posts[0].imgPath : defaultProfileImage;


  return (
    <div className={styles.box}>
      <Scroll>
        <div className={styles.posts}>
          {myProfile && <AddPost imgPath={image}/>}
          {posts.length > 0 && posts.map((post, index) => (
            <ShowPost
              key={index}
              imgPath={post.imgPath}
              name={post.name}
              position={post.position}
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