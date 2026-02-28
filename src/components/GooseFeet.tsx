export const GooseFeet = ({ className, size = 24 }: { className?: string, size?: number | string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`lucide lucide-goose-feet ${className || ''}`}
      aria-hidden="true"
    >
      {/* Front Foot (Vertical) */}
      <path d="M65 20 C 60 25, 55 25, 50 20 L 65 45 L 65 20 Z" fill="currentColor"/>
      <path d="M65 20 C 70 25, 75 25, 80 20 L 65 45 L 65 20 Z" fill="currentColor"/>
      {/* Back Foot (Vertical) */}
      <path d="M35 50 C 30 55, 25 55, 20 50 L 35 75 L 35 50 Z" fill="currentColor"/>
      <path d="M35 50 C 40 55, 45 55, 50 50 L 35 75 L 35 50 Z" fill="currentColor"/>
    </svg>
  );
};
