import { useEffect, useRef } from "react";

const skills = [
  "Laravel",
  "React.js",
  "PHP",
  "MySQL",
  "NodeJS",
  "Git",
  "GitHub Actions",
  "TypeScript",
  "React Native",
  "Expo",
  "jQuery",
  "JavaScript",
  "HTML",
  "CSS",
  "Wix Studio",
  "Figma",
  "Photoshop",
];

const Marquee = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const offsetRef = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragOffset = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const totalWidth = container.scrollWidth / 2;

    const animate = () => {
      if (!isDragging.current) {
        offsetRef.current += 0.5;
        if (offsetRef.current >= totalWidth) {
          offsetRef.current = 0;
        }
        container.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    lastX.current = e.pageX;
    lastTime.current = Date.now();
    dragOffset.current = offsetRef.current;
    velocity.current = 0; // reset velocity on each click
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const now = Date.now();
    velocity.current = (lastX.current - e.pageX) / (now - lastTime.current);
    lastX.current = e.pageX;
    lastTime.current = now;

    const diff = startX.current - e.pageX;
    const totalWidth = containerRef.current.scrollWidth / 2;
    let newOffset = dragOffset.current + diff;
    if (newOffset < 0) newOffset = 0;
    if (newOffset >= totalWidth) newOffset = totalWidth - 1;
    offsetRef.current = newOffset;
    containerRef.current.style.transform = `translateX(-${newOffset}px)`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current.style.cursor = "grab";

    if (Math.abs(velocity.current) < 0.1) return; // ignore clicks

    let momentum = velocity.current * 15;
    const applyMomentum = () => {
      if (Math.abs(momentum) < 0.1) return;
      const totalWidth = containerRef.current.scrollWidth / 2;
      offsetRef.current += momentum;
      if (offsetRef.current < 0) offsetRef.current = 0;
      if (offsetRef.current >= totalWidth) offsetRef.current = 0;
      containerRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      momentum *= 0.95;
      requestAnimationFrame(applyMomentum);
    };
    requestAnimationFrame(applyMomentum);
  };

  // Touch support
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    lastX.current = e.touches[0].pageX;
    lastTime.current = Date.now();
    dragOffset.current = offsetRef.current;
    velocity.current = 0; // reset velocity on each tap
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const now = Date.now();
    velocity.current =
      (lastX.current - e.touches[0].pageX) / (now - lastTime.current);
    lastX.current = e.touches[0].pageX;
    lastTime.current = now;

    const diff = startX.current - e.touches[0].pageX;
    const totalWidth = containerRef.current.scrollWidth / 2;
    let newOffset = dragOffset.current + diff;
    if (newOffset < 0) newOffset = 0;
    if (newOffset >= totalWidth) newOffset = totalWidth - 1;
    offsetRef.current = newOffset;
    containerRef.current.style.transform = `translateX(-${newOffset}px)`;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;

    if (Math.abs(velocity.current) < 0.1) return; // ignore taps

    let momentum = velocity.current * 15;
    const applyMomentum = () => {
      if (Math.abs(momentum) < 0.1) return;
      const totalWidth = containerRef.current.scrollWidth / 2;
      offsetRef.current += momentum;
      if (offsetRef.current < 0) offsetRef.current = 0;
      if (offsetRef.current >= totalWidth) offsetRef.current = 0;
      containerRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      momentum *= 0.95;
      requestAnimationFrame(applyMomentum);
    };
    requestAnimationFrame(applyMomentum);
  };

  return (
    <div className="mt-20 animate-fade-in animation-delay-600">
      <p className="text-sm text-muted-foreground mb-6 text-center">
        Technologies I work with
      </p>
      <div
        className="relative overflow-hidden cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div ref={containerRef} className="flex">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex-shrink-0 px-8 py-4">
              <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
