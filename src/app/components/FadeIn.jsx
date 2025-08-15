import { useRef, useEffect } from "react";

export default function FadeIn({ children, className = "" }) {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
}