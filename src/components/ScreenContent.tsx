export function BookAppScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white px-3 pt-6 text-neutral-900">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-medium text-neutral-800">
          Daily picks for Kevin
        </span>
        <div className="h-4 w-4 rounded-full bg-neutral-200" />
      </div>

      <div className="relative mt-4 flex flex-1 items-center justify-center">
        <div className="absolute h-24 w-16 -translate-x-3 -rotate-6 rounded-md bg-neutral-200" />
        <div className="absolute h-24 w-16 translate-x-3 rotate-6 rounded-md bg-neutral-300" />
        <div className="relative flex h-28 w-[74px] flex-col justify-between rounded-md bg-gradient-to-br from-amber-100 to-amber-200 p-1.5 shadow-lg">
          <span className="text-[5px] font-semibold tracking-wide text-amber-900">
            THE NO.1 BESTSELLER
          </span>
          <span className="font-display text-[11px] italic leading-none text-amber-950">
            The Goldfinch
          </span>
          <span className="text-[4px] text-amber-800">
            &ldquo;A masterpiece&rdquo;
          </span>
        </div>
      </div>

      <div className="mb-2 flex gap-1 overflow-hidden">
        {["Romantic", "Biographies", "Fictions", "Business"].map((t) => (
          <span
            key={t}
            className="whitespace-nowrap rounded-full bg-neutral-900 px-2 py-0.5 text-[6px] text-white"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mb-3 flex items-center justify-between border-t border-neutral-100 pt-2 text-[6px] text-neutral-500">
        <span>Top Authors</span>
        <span>view all</span>
      </div>

      <div className="mb-3 flex justify-between px-1 text-neutral-400">
        {["●", "◎", "▭", "⚙"].map((icon, i) => (
          <span key={i} className={i === 0 ? "text-blue-500" : ""}>
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}

export function OrderAppScreen({ tone = "green" }: { tone?: "green" }) {
  return (
    <div className="flex h-full w-full flex-col bg-white px-3 pt-6 text-neutral-900">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-neutral-400">←</span>
        <span className="text-[10px] font-semibold">Orders</span>
      </div>

      <div className="mb-2 flex gap-3 border-b border-neutral-100 pb-1.5 text-[6px] text-neutral-400">
        <span className="border-b border-neutral-900 pb-1 text-neutral-900">
          Dashboard
        </span>
        <span>Your Orders</span>
        <span>SKU&apos;s</span>
      </div>

      <div className="mb-2 grid grid-cols-2 gap-1.5">
        <div className="rounded-md bg-neutral-50 p-1.5">
          <span className="text-[5px] text-neutral-400">Order Received</span>
          <div className="mt-1 flex justify-between text-[7px] font-semibold">
            <span>12</span>
            <span>10</span>
          </div>
        </div>
        <div className="rounded-md bg-neutral-50 p-1.5">
          <span className="text-[5px] text-neutral-400">Order Value</span>
          <div className="mt-1 flex justify-between text-[7px] font-semibold">
            <span>12</span>
            <span>10</span>
          </div>
        </div>
      </div>

      <div className="mb-2 flex items-center justify-between rounded-md bg-red-50 px-1.5 py-1 text-[6px] text-red-500">
        <span>Pending Payments</span>
        <span className="font-semibold">₹100</span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        {[
          { id: "PGBK02322", name: "Rakesh Singh", status: "Received", color: "bg-amber-100 text-amber-600" },
          { id: "PGBK02322", name: "Mohit Chauhan", status: "Approved", color: "bg-violet-100 text-violet-600" },
        ].map((o, i) => (
          <div key={i} className="rounded-md border border-neutral-100 p-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[5px] text-neutral-400">Order ID: {o.id}</span>
              <span className={`rounded-full px-1 text-[4px] ${o.color}`}>
                {o.status}
              </span>
            </div>
            <span className="text-[6px] font-medium">{o.name}</span>
          </div>
        ))}
      </div>

      <div
        className={`mb-2 rounded-full py-1.5 text-center text-[7px] font-medium text-white ${
          tone === "green" ? "bg-emerald-600" : "bg-blue-600"
        }`}
      >
        Add orders
      </div>
    </div>
  );
}
