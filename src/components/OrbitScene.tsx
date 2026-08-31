import FloatingItem from "./FloatingItem";
import PhoneMock from "./PhoneMock";
import { BookAppScreen } from "./ScreenContent";

const BOOKS = [
  { title: "Vincent & the Wonderland", gradient: "from-sky-500 to-indigo-700", pos: { top: "6%", left: "20%" }, rotate: -10 },
  { title: "Jaws", gradient: "from-neutral-700 to-neutral-900", pos: { top: "4%", right: "18%" }, rotate: 8 },
  { title: "Purple Hills", gradient: "from-fuchsia-600 to-purple-900", pos: { top: "44%", left: "4%" }, rotate: -6 },
  { title: "Harry & Co.", gradient: "from-amber-500 to-purple-700", pos: { top: "42%", right: "4%" }, rotate: 7 },
  { title: "Scorch", gradient: "from-rose-600 to-neutral-900", pos: { bottom: "6%", left: "18%" }, rotate: 9 },
  { title: "Pyre Rock", gradient: "from-sky-800 to-neutral-900", pos: { bottom: "4%", right: "16%" }, rotate: -8 },
];

const DOTS = [
  { top: "18%", left: "10%" },
  { top: "30%", right: "8%" },
  { bottom: "22%", left: "8%" },
  { top: "8%", left: "48%" },
];

export default function OrbitScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-[320px] w-[320px] md:h-[440px] md:w-[440px]">
        <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />

        {DOTS.map((d, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/30"
            style={d}
          />
        ))}

        {BOOKS.map((b, i) => (
          <FloatingItem
            key={b.title}
            className="absolute z-0"
            style={b.pos}
            baseRotate={b.rotate}
            duration={4.5 + i * 0.4}
            delay={i * 0.3}
            floatY={12}
          >
            <div
              className={`flex h-24 w-16 flex-col justify-end rounded-lg bg-gradient-to-br p-1.5 shadow-xl md:h-28 md:w-[74px] ${b.gradient}`}
            >
              <span className="font-display text-[8px] font-medium leading-tight text-white/90">
                {b.title}
              </span>
            </div>
          </FloatingItem>
        ))}

        <PhoneMock
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          width={150}
        >
          <BookAppScreen />
        </PhoneMock>
      </div>
    </div>
  );
}
