import { useState, useEffect, useRef } from 'react';

function useElementPosition() {
  const [elementRect, setElementRect] = useState(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setElementRect(rect);
      }
    };

    const updatePosition = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setElementRect(rect);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        updatePosition();
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
      updatePosition();
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [elementRect, elementRef];
}

export default useElementPosition;
