/* eslint-disable react/prop-types */
export default function SectionDivider({ variant = "wave", className = "" }) {
  if (variant === "curve") {
    return (
      <div className={`w-full overflow-hidden leading-none text-white/[0.04] ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-10 w-full sm:h-16"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  if (variant === "slope") {
    return (
      <div className={`w-full overflow-hidden leading-none text-cyan-300/[0.03] ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-8 w-full sm:h-12"
        >
          <path d="M1200 0L0 120V120H1200V0Z" fill="currentColor" />
        </svg>
      </div>
    );
  }

  // Default wave variant
  return (
    <div className={`w-full overflow-hidden leading-none text-blue-500/[0.04] ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-10 w-full sm:h-16"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.94,130.83,121.2,201,111.41Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
