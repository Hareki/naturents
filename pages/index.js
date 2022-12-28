import {
  dehydrate,
  QueryClient,
  useQuery
} from '@tanstack/react-query';
import { getPromotedDishes } from '../backend/controllers/dish-controller';
import AboutSection from '../frontend/components/landing-page/about-section/about-section';
import AsFeaturedSection from '../frontend/components/landing-page/as-featured-section/as-featured-section';
import FAQSection from '../frontend/components/landing-page/faq-section/faq-section';
import FeaturesSection from '../frontend/components/landing-page/features-section/features-section';
import HeroSection from '../frontend/components/landing-page/hero-section/hero-section';
import MenuSection from '../frontend/components/landing-page/menu-section/menu-section';
import TestimonialsSection from '../frontend/components/landing-page/testimonials-section/testimonials-section';
import useScrollObserver from '../frontend/hooks/use-scroll-observer';
import { serialize } from '../helpers/backend-helpers/db-helper';
import { myAxios } from '../helpers/frontend-helpers/https-helper';

const repeatScrollAnimation = true;
async function fetchPromotedDishes() {
  const response = await myAxios.get(`/api/menu/promoted-dishes`);
  return response.data;
}
function LandingPage() {
  const { data: promotedDishes } = useQuery(
    ['promoted-dishes'],
    fetchPromotedDishes
  );

  const [heroRef, heroIsInView] = useScrollObserver({
    threshold: 0.5
  });
  const [featuresRef, featureIsInView] = useScrollObserver({
    threshold: 0.3
  });
  const [asFeaturedRef, asFeaturedIsInView] = useScrollObserver({
    threshold: 0.2
  });
  const [aboutRef, aboutIsInView] = useScrollObserver({
    threshold: 0.4
  });
  const [testimonialsRef, testimonialsIsInView] = useScrollObserver({
    threshold: 0.65
  });
  const [menuRef, menuIsInView] = useScrollObserver({
    threshold: 0.5
  });
  const [faqRef, faqIsInView] = useScrollObserver({
    threshold: 0.2
  });

  return (
    <main>
      <HeroSection
        repeat={repeatScrollAnimation}
        isInView={heroIsInView}
        ref={heroRef}
      />
      <FeaturesSection
        repeat={repeatScrollAnimation}
        isInView={featureIsInView}
        ref={featuresRef}
      />
      <AsFeaturedSection
        repeat={repeatScrollAnimation}
        isInView={asFeaturedIsInView}
        ref={asFeaturedRef}
      />
      <TestimonialsSection
        repeat={repeatScrollAnimation}
        isInView={testimonialsIsInView}
        ref={testimonialsRef}
      />
      <MenuSection
        repeat={repeatScrollAnimation}
        isInView={menuIsInView}
        ref={menuRef}
        promotedDishes={promotedDishes}
      />
      <FAQSection
        repeat={repeatScrollAnimation}
        isInView={faqIsInView}
        ref={faqRef}
      />
      <AboutSection
        repeat={repeatScrollAnimation}
        isInView={aboutIsInView}
        ref={aboutRef}
      />
    </main>
  );
}

export async function getStaticProps(context) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ['promoted-dishes'],
    getPromotedDishes
  );

  return {
    props: {
      dehydratedState: serialize(dehydrate(queryClient))
    },
    revalidate: 1800
  };
}

export default LandingPage;
