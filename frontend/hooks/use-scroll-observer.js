import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
//Nâng cấp của useInView.
//Chỉnh để biết chính xác threshold bao nhiêu mới được
//coi là 'InView'
function useScrollObserver(options) {
  const { threshold } = options;
  const [observerRef, , entry] = useInView(options);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (entry?.intersectionRatio >= threshold) setIsInView(true);
    else setIsInView(false);
  }, [entry, threshold]);

  return [observerRef, isInView];
}

export default useScrollObserver;
