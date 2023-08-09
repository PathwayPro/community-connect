import React, { ReactNode } from 'react';

import Container from '../../common/components/Container/Container';

import styles from './SectionMain.module.scss';

interface SectionProps {
  children: ReactNode;
}

const SectionMain: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className={styles.section}>
      <Container>{children}</Container>
    </section>
  );
};

export default SectionMain;
