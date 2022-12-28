import concat from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import scss from './tab-link.module.scss';

function TabLink({ children, href, className }) {
  const router = useRouter();
  const pathname = router.asPath;
  const isActive = (href) => pathname === href;
  return (
    <Link
      href={href}
      scroll={false}
      className={concat(scss['tab-link'], className, {
        [scss['tab-link--active']]: isActive(href)
      })}>
      {children}
    </Link>
  );
}
export default TabLink;
