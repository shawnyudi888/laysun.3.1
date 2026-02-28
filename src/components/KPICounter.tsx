import { useCountUp } from '@/hooks/useCountUp';

interface KPICounterProps {
  number: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function KPICounter({ number, suffix = '', label, duration = 2000 }: KPICounterProps) {
  const { displayValue, ref } = useCountUp({
    end: number,
    duration,
    suffix,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-kpi font-heading font-bold text-laysun-gold mb-2">
        {displayValue}
      </div>
      <div className="text-body text-laysun-gray">{label}</div>
    </div>
  );
}
