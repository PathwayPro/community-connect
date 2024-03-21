import { FC } from 'react';

import ButtonLink from '../../common/components/ButtonLink/ButtonLink';
import SideBlock from '../../common/components/SideBlock/SideBlock';

import styles from './MentorshipPromo.module.scss';

const MentorshipPromo: FC = () => {
  return (
    <SideBlock title="Mentorship"  btnTitle='View all'>
      <div className={styles.MentorshipPromo}>
        <ButtonLink label="It's Free, Apply Now!" size="small" color="orange" to="/mentorship/apply"></ButtonLink>
      </div>
    </SideBlock>
  );
};

export default MentorshipPromo;
