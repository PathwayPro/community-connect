import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import Icon, { iconProps } from './Icon/Icon';

interface footerLinkItem {
  heading: string;
  list: { label: string; link: string; external?: boolean }[];
}

const footerLinks: footerLinkItem[] = [
  {
    heading: 'Work with us',
    list: [
      { label: 'Apply for mentorship', link: '/mentorship' },
      { label: 'Become a mentor', link: '/mentorship' },
      { label: 'Become a partner', link: '/mentorship' },
    ],
  },
  {
    heading: 'Events',
    list: [
      { label: 'Upcoming Events', link: '/events' },
      { label: 'Past Recordings', link: '/events' },
    ],
  },
  {
    heading: 'Contacts',
    list: [{ label: 'immigranttechiesab@gmail.com', link: 'mailto:immigranttechiesab@gmail.com', external: true }],
  },
];

const socialsList: iconProps[] = [
  { href: '/', type: 'in' },
  { href: '/', type: 'fb' },
  { href: '/', type: 'inst' },
];

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      {footerLinks.map((element) => (
        <div key={element.heading} className={styles.container}>
          <h4 className={styles.heading}>{element.heading}</h4>
          <ul className={styles.list}>
            {element.list.map((item) => (
              <li key={item.label} className={styles.listColumn}>
                {item?.external ? (
                  <a href={item.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.link} className={styles.link}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {element.heading === 'Contacts' && (
            <div className={styles.socials}>
              {socialsList.map((item) => (
                <Icon key={item.type} href={item.href} type={item.type} />
              ))}
            </div>
          )}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
