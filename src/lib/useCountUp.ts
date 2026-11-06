import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  suffix: string,
  active: boolean,
): string {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const t0 = performance.now();
    let frame: number;

    const tick = (t: number) => {
      const p = Math.min((t - t0) / 1200, 1);
      const value = Math.round(target * (1 - Math.pow(1 - p, 3)));
      setDisplay(String(value) + (p === 1 ? suffix : ""));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, suffix]);

  return display;
}
