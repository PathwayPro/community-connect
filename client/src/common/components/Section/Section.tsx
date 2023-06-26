import React, { ReactNode } from 'react';

import styles from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default Section;
