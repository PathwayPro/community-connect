import { FC } from 'react';

import SideBlock from '../../common/components/SideBlock/SideBlock';

import Resource from './Resource/Resource';

import styles from './Resources.module.scss';

interface resourceProps {
  id: number;
  title: string;
}

const resourceList: resourceProps[] = [
  { id: 1, title: 'Inclusive Design: Accessibility for All' },
  { id: 2, title: 'Interaction Design: Engage and Satisfy Users' },
  { id: 3, title: 'The Essentials of UI Design: A Comprehensive Guide' },
  { id: 4, title: 'Visual Hierarchy: Engaging User Interfaces' },
  { id: 5, title: 'The Essentials of UI Design: Accessibility for All' },
];

const Resources: FC = () => {
  return (
    <SideBlock title="Resources" subtitle="Recent topics" linkTo="/resources">
      <div className={styles.resources}>
        {resourceList && resourceList.map((connection) => <Resource key={connection.id} title={connection.title} />)}
      </div>
    </SideBlock>
  );
};

export default Resources;
