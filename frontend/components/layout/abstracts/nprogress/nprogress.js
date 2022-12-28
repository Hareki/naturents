import Router from 'next/router';
import NProgress from 'nprogress';

export default function configNProgress() {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  NProgress.configure({
    easing: 'ease',
    speed: 500,
    trickleSpeed: 100,
    showSpinner: false
  });
}
