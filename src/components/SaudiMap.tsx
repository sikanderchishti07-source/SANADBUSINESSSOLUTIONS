import { useLang } from "../i18n";

/* Hand-drawn simplified Kingdom outline (viewBox 500×440) with animated trade routes */
export default function SaudiMap({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const ar = lang === "ar";

  const cities: { x: number; y: number; name: [string, string]; major?: boolean }[] = [
    { x: 108, y: 58, name: ["NEOM", "نيوم"], major: true },
    { x: 150, y: 44, name: ["Tabuk", "تبوك"] },
    { x: 232, y: 104, name: ["Hail", "حائل"] },
    { x: 252, y: 146, name: ["Buraidah", "بريدة"] },
    { x: 150, y: 150, name: ["Madina", "المدينة"] },
    { x: 70, y: 168, name: ["Yanbu", "ينبع"] },
    { x: 298, y: 208, name: ["Riyadh", "الرياض"], major: true },
    { x: 366, y: 168, name: ["Dammam", "الدمام"], major: true },
    { x: 78, y: 224, name: ["Jeddah", "جدة"], major: true },
    { x: 150, y: 330, name: ["Abha", "أبها"] },
    { x: 116, y: 378, name: ["Jazan", "جازان"] },
  ];

  const routes = [
    "M 298,208 Q 190,242 82,224",
    "M 298,208 Q 332,180 362,170",
    "M 78,216 Q 58,120 106,62",
    "M 298,208 Q 222,282 152,326",
    "M 298,208 Q 268,168 254,150",
  ];

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 500 440" className="w-full h-auto" role="img" aria-label="SANAD coverage across Saudi Arabia">
        <defs>
          <linearGradient id="mapFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10294d" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0a1b33" stopOpacity="0.95" />
          </linearGradient>
          <radialGradient id="mapGlow" cx="0.6" cy="0.45" r="0.7">
            <stop offset="0%" stopColor="#c9a227" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ambient glow */}
        <rect x="0" y="0" width="500" height="440" fill="url(#mapGlow)" />

        {/* Kingdom outline */}
        <path
          d="M 92,30 L 128,20 L 190,38 L 262,52 L 302,86 L 332,80 L 346,104 L 358,140 L 378,168 L 384,196 L 372,212 L 386,232 L 404,268 L 452,308 L 430,332 L 350,342 L 268,348 L 196,388 L 148,404 L 112,392 L 96,352 L 112,316 L 92,286 L 100,252 L 76,232 L 90,196 L 64,168 L 84,128 L 64,96 L 92,64 Z"
          fill="url(#mapFill)"
          stroke="#c9a227"
          strokeOpacity="0.5"
          strokeWidth="1.4"
        />

        {/* internal grid texture */}
        <g stroke="#d9b45b" strokeOpacity="0.06">
          {[80, 140, 200, 260, 320, 380].map((y) => (
            <line key={`h${y}`} x1="50" y1={y} x2="450" y2={y} />
          ))}
          {[100, 160, 220, 280, 340, 400].map((x) => (
            <line key={`v${x}`} x1={x} y1="15" x2={x} y2="410" />
          ))}
        </g>

        {/* trade routes */}
        {routes.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#d9b45b"
            strokeOpacity={0.75 - i * 0.08}
            strokeWidth="1.6"
            strokeLinecap="round"
            className="route-dash"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {/* cities */}
        {cities.map((c) => (
          <g key={c.name[0]}>
            {c.major && <circle cx={c.x} cy={c.y} r="7" fill="none" stroke="#d9b45b" strokeWidth="1" className="pulse-ring" />}
            <circle cx={c.x} cy={c.y} r={c.major ? 4 : 2.6} fill={c.major ? "#d9b45b" : "#8fa6c8"} />
            <text
              x={c.x + (c.x > 280 ? -10 : 10)}
              y={c.y + 4}
              textAnchor={c.x > 280 ? "end" : "start"}
              className="fill-current"
              fill={c.major ? "#e6c777" : "#9db2d0"}
              style={{ font: `600 ${c.major ? 12 : 10}px Manrope, "IBM Plex Sans Arabic", sans-serif`, letterSpacing: "0.08em" }}
            >
              {ar ? c.name[1] : c.name[0]}
            </text>
          </g>
        ))}

        {/* Riyadh HQ marker */}
        <g transform="translate(298 208)">
          <path d="M0,-16 C 6,-16 9,-11 9,-7 C 9,-1 0,6 0,6 C 0,6 -9,-1 -9,-7 C -9,-11 -6,-16 0,-16 Z" fill="#c9a227" transform="translate(0,-8)" />
          <circle cx="0" cy="-15" r="3" fill="#081830" />
        </g>
      </svg>
    </div>
  );
}
