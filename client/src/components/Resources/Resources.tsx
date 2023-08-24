import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import SideBlock from '../../common/components/SideBlock/SideBlock';

import Resource from './Resource/Resource';

import styles from './Resources.module.scss';

interface resourceProps {
  id: number;
  title: string;
  status: 'green' | 'red' | 'yellow';
}

const resourceList: resourceProps[] = [
  { id: 1, title: 'Inclusive Design: Accessibility for All', status: 'red' },
  { id: 2, title: 'Interaction Design: Engage and Satisfy Users', status: 'red' },
  { id: 3, title: 'The Essentials of UI Design: A Comprehensive Guide', status: 'green' },
  { id: 4, title: 'Visual Hierarchy: Engaging User Interfaces', status: 'green' },
  { id: 5, title: 'The Essentials of UI Design: Accessibility for All', status: 'yellow' },
];

const Resources: FC = () => {
  return (
    <SideBlock title="Resources" subtitle="Recent topics">
      <div className={styles.resources}>
        {resourceList &&
          resourceList.map((connection) => (
            <Resource key={connection.id} title={connection.title} status={connection.status} />
          ))}
      </div>
      <NavLink to="/" className={styles.navLink}>
        View all
      </NavLink>
    </SideBlock>
  );
};

export default Resources;
