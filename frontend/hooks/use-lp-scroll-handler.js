import { useEffect, useState } from 'react';

//LP = Landing Page
function useLPScrollHandler({ repeat, isInView }) {
  const [animated, setAnimated] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!repeat && !animated && isInView) {
      setAnimated(true);
      setShow(true);
      return;
    }

    if (animated) return;

    if (isInView) setShow(true);
    else setShow(false);
  }, [isInView, repeat, animated]);

  return show;
}

export default useLPScrollHandler;
