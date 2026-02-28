export const GooseFeet = ({ className, size = 24 }: { className?: string, size?: number | string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-goose-feet ${className || ''}`}
      aria-hidden="true"
    >
      {/* Left foot */}
      <path d="M4 16 l2 -4 l2 4 M6 12 v-4" />
      <path d="M4 16 q2 2 4 0" />

      {/* Right foot */}
      <path d="M16 20 l2 -4 l2 4 M18 16 v-4" />
      <path d="M16 20 q2 2 4 0" />
    </svg>
  );
};
