import FloatingItem from "./FloatingItem";
import PhoneMock from "./PhoneMock";
import { OrderAppScreen } from "./ScreenContent";

export default function DeliveryScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        className="absolute h-full w-full opacity-40"
        viewBox="0 0 400 300"
        fill="none"
      >
        <path
          d="M20 220 C 120 260, 280 260, 380 200"
          stroke="white"
          strokeOpacity="0.3"
          strokeDasharray="4 6"
        />
        <path
          d="M40 60 C 140 20, 260 20, 360 80"
          stroke="white"
          strokeOpacity="0.3"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="relative flex h-full w-full max-w-[420px] items-center justify-center">
        <PhoneMock
          className="relative z-10 -translate-x-6 -rotate-6"
          width={160}
        >
          <OrderAppScreen />
        </PhoneMock>
        <PhoneMock
          className="relative z-20 -ml-10 translate-x-6 translate-y-4 rotate-6"
          width={160}
        >
          <OrderAppScreen />
        </PhoneMock>

        <FloatingItem
          className="absolute bottom-4 left-2 z-0"
          baseRotate={-8}
          duration={3.5}
          floatY={10}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg shadow-lg">
            🛵
          </div>
        </FloatingItem>

        <FloatingItem
          className="absolute right-2 top-4 z-0"
          baseRotate={8}
          duration={4}
          delay={0.6}
          floatY={10}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg shadow-lg">
            🛵
          </div>
        </FloatingItem>
      </div>
    </div>
  );
}
