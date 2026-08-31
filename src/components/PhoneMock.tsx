import type { CSSProperties, ReactNode } from "react";

export default function PhoneMock({
  children,
  className,
  style,
  width = 210,
}: {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  width?: number;
}) {
  return (
    <div
      className={className}
      style={{ width, aspectRatio: "9 / 19", ...style }}
    >
      <div className="relative h-full w-full rounded-[32px] border-[6px] border-neutral-950 bg-neutral-950 shadow-2xl shadow-black/40">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-neutral-950" />
        <div className="h-full w-full overflow-hidden rounded-[26px] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
