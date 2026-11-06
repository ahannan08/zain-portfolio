export function ServicesAvatar() {
  return (
    <div
      className="services-avatar-wrap w-[min(200px,70vw)] shrink-0"
      aria-hidden
    >
      <svg
        viewBox="0 0 220 260"
        className="h-auto w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background blob — pulses (element has no transform attr) */}
        <ellipse
          className="services-avatar-blob"
          cx="110"
          cy="135"
          rx="88"
          ry="95"
          fill="#E3F0EB"
        />

        {/* Chart chip — position fixed on outer g, bob on inner */}
        <g transform="translate(8 42)">
          <g className="services-avatar-chip services-avatar-chip-chart">
            <rect
              x="0"
              y="0"
              width="44"
              height="36"
              rx="8"
              fill="#FFFFFF"
              stroke="#E1E8E5"
              strokeWidth="1.5"
            />
            <polyline
              points="8,24 14,18 20,22 28,12 36,8"
              fill="none"
              stroke="#047857"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>

        <g transform="translate(158 52)">
          <g className="services-avatar-chip services-avatar-chip-search">
            <rect
              x="0"
              y="0"
              width="44"
              height="36"
              rx="8"
              fill="#FFFFFF"
              stroke="#E1E8E5"
              strokeWidth="1.5"
            />
            <circle cx="18" cy="16" r="7" fill="none" stroke="#047857" strokeWidth="2" />
            <line
              x1="23"
              y1="21"
              x2="32"
              y2="30"
              stroke="#047857"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </g>

        <g transform="translate(12 175)">
          <g className="services-avatar-chip services-avatar-chip-code">
            <rect
              x="0"
              y="0"
              width="44"
              height="36"
              rx="8"
              fill="#FFFFFF"
              stroke="#E1E8E5"
              strokeWidth="1.5"
            />
            <text
              x="22"
              y="24"
              textAnchor="middle"
              fill="#047857"
              fontFamily="ui-monospace, monospace"
              fontSize="14"
              fontWeight="600"
            >
              &lt;/&gt;
            </text>
          </g>
        </g>

        {/* Whole figure — float on inner g; position on outer */}
        <g transform="translate(110 128)">
          <g className="services-avatar-body">
            {/* Torso / shirt */}
            <path
              d="M-42 28 L-38 88 L38 88 L42 28 Q42 12 0 8 Q-42 12 -42 28Z"
              fill="#047857"
            />
            {/* Neck */}
            <rect x="-12" y="-8" width="24" height="18" rx="4" fill="#9FC9B8" />
            {/* Head */}
            <ellipse cx="0" cy="-28" rx="34" ry="38" fill="#9FC9B8" />
            {/* Hair */}
            <path
              d="M-34 -48 C-38 -72 -20 -88 0 -90 C20 -88 38 -72 34 -48 C32 -58 24 -64 0 -66 C-24 -64 -32 -58 -34 -48Z"
              fill="#0B1F1A"
            />
            <path
              d="M-32 -44 Q0 -52 32 -44 Q28 -36 0 -38 Q-28 -36 -32 -44Z"
              fill="#0B1F1A"
            />
            {/* Left arm */}
            <path
              d="M-40 32 Q-52 48 -54 72 L-48 78 Q-42 56 -35 38Z"
              fill="#047857"
            />
            <ellipse cx="-50" cy="76" rx="9" ry="8" fill="#9FC9B8" />

            {/* Right arm — waves; pivot at shoulder */}
            <g transform="translate(38 34)">
              <g className="services-avatar-arm">
                <path
                  d="M0 0 Q14 8 18 28 L22 52 Q24 62 16 68 L8 64 Q12 48 8 28 Q4 12 0 0Z"
                  fill="#047857"
                />
                <ellipse cx="18" cy="68" rx="9" ry="8" fill="#9FC9B8" />
              </g>
            </g>

            {/* Eyes — blink */}
            <g transform="translate(0 -28)">
              <g className="services-avatar-eyes">
                <ellipse cx="-14" cy="-4" rx="5" ry="6" fill="#0B1F1A" />
                <ellipse cx="14" cy="-4" rx="5" ry="6" fill="#0B1F1A" />
              </g>
            </g>
            {/* Smile */}
            <path
              d="M-12 8 Q0 16 12 8"
              fill="none"
              stroke="#0B1F1A"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.35"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
