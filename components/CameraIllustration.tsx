export default function CameraIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 420"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="55%" stopColor="#d7dade" />
          <stop offset="100%" stopColor="#aeb3ba" />
        </linearGradient>
        <linearGradient id="lensGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2b2f36" />
          <stop offset="100%" stopColor="#05060a" />
        </linearGradient>
        <radialGradient id="glass" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#5b9bd5" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#0a0d12" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <linearGradient id="mountGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7cbd1" />
          <stop offset="100%" stopColor="#8b9096" />
        </linearGradient>
      </defs>

      {/* wall mount arm */}
      <rect x="540" y="120" width="26" height="90" rx="6" fill="url(#mountGrad)" />
      <circle cx="553" cy="120" r="20" fill="url(#mountGrad)" />
      <rect x="10" y="60" width="18" height="18" rx="3" fill="#9aa0a6" opacity="0.5" />

      {/* body */}
      <rect x="120" y="150" width="330" height="120" rx="18" fill="url(#bodyGrad)" stroke="#8b9096" strokeWidth="2" />
      {/* brand plate */}
      <rect x="150" y="185" width="140" height="16" rx="3" fill="#7c828a" opacity="0.5" />
      <text x="155" y="197" fontSize="13" fontFamily="Arial, sans-serif" fill="#ffffff" fontWeight="700" opacity="0.85">SECURE-VISION</text>

      {/* sun shield */}
      <path d="M420 150 q60 -8 90 5 l0 18 q-45 -10 -90 -3 z" fill="#c7cbd1" />

      {/* lens housing */}
      <rect x="430" y="140" width="150" height="140" rx="70" fill="url(#bodyGrad)" stroke="#8b9096" strokeWidth="2" />
      <circle cx="505" cy="210" r="58" fill="url(#lensGrad)" />
      <circle cx="505" cy="210" r="46" fill="url(#glass)" />
      <circle cx="486" cy="192" r="12" fill="#ffffff" opacity="0.25" />
      <circle cx="505" cy="210" r="4" fill="#5b9bd5" opacity="0.8" />

      {/* IR ring dots */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const cx = 505 + Math.cos(angle) * 52;
        const cy = 210 + Math.sin(angle) * 52;
        return <circle key={i} cx={cx} cy={cy} r="2.2" fill="#4b4f55" />;
      })}

      {/* rear cap ridges */}
      <rect x="132" y="160" width="10" height="100" rx="4" fill="#9aa0a6" />
      <rect x="148" y="160" width="6" height="100" rx="3" fill="#9aa0a6" opacity="0.7" />

      {/* base mount to arm */}
      <rect x="440" y="205" width="110" height="10" fill="#8b9096" opacity="0.4" />

      {/* status LED */}
      <circle cx="440" cy="160" r="4" fill="#f2b705" />
    </svg>
  );
}
