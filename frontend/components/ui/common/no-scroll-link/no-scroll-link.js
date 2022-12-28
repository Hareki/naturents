import Link from 'next/link';

const NoScrollLink = ({ children, href, className, ...props }) => (
  <Link className={className} href={href} scroll={false} {...props}>
    {children}
  </Link>
);

export default NoScrollLink;
