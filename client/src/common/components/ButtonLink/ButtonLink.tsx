import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './ButtonLink.module.scss';

interface ButtonLinkProps {
  label: string;
  size?: 'normal' | 'small';
  to?: string;
  color?: 'orange' | 'orangeLight' | 'hollow';
  className?: string;
  external?: boolean;
}

const ButtonLink: FC<ButtonLinkProps> = ({
  label,
  size = 'normal',
  to = '/',
  color = 'orange',
  className,
  external = false,
}) => {
  const linkClass = classNames(className, styles.link, styles[size], styles[color]);

  return external ? (
    // Use a standard anchor tag for external links
    <a href={to} className={linkClass} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    // Use a Link for internal routes
    <Link to={to} className={linkClass}>
      {label}
    </Link>
  );
};

export default ButtonLink;
