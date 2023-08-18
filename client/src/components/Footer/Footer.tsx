import { FC } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../common/components/Container/Container';
import Icon, { iconProps } from '../../common/components/Icon/Icon';

import styles from './Footer.module.scss';

interface footerLinkItem {
  heading: string;
  list: { label: string; link: string; external?: boolean }[];
}

const footerLinks: footerLinkItem[] = [
  {
    heading: 'Work with us',
    list: [
      { label: 'Apply for mentorship', link: '/mentorship/apply' },
      { label: 'Become a mentor', link: '/mentorship/become-mentor' },
      { label: 'Become a volunteer', link: '/volunteering' },
      { label: 'Become a partner', link: '/' }, // TODO: No page, just invoke modal
    ],
  },
  {
    heading: 'Events',
    list: [
      { label: 'Upcoming Events', link: '/events' },
      { label: 'Past Events', link: '/events' },
    ],
  },
  {
    heading: 'Contacts',
    list: [{ label: 'immigranttechiesab@gmail.com', link: 'mailto:immigranttechiesab@gmail.com', external: true }],
  },
];

const socialsList: iconProps[] = [
  { href: '/', type: 'in', className: styles.icon },
  { href: '/', type: 'fb', className: styles.icon },
  { href: '/', type: 'inst', className: styles.icon },
];

const onClickUpButton = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
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
            </div>
          ))}
          <div className={styles.socials}>
            {socialsList.map((item) => (
              <Icon key={item.type} href={item.href} type={item.type} shape="rnd" />
            ))}
          </div>
          <button className={styles.upButton} onClick={onClickUpButton} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
