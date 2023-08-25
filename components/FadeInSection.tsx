import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);

  return (
    <section>
      <div ref={ref}>{children}</div>
    </section>
  );
}

export default FadeInSection;
