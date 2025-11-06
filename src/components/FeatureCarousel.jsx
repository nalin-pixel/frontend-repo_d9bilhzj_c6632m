import { useEffect, useRef, useState } from 'react';
import { MapPin, Fuel, Clock, Gauge } from 'lucide-react';

const FEATURES = [
  {
    icon: MapPin,
    title: 'Nearby Pumps',
    desc: 'See stations around you with live distance and navigation.',
  },
  { icon: Fuel, title: 'Live Prices', desc: 'Track petrol and diesel prices in real time.' },
  { icon: Clock, title: 'Busiest Hours', desc: 'Avoid queues with predicted wait times.' },
  { icon: Gauge, title: 'Performance', desc: 'Lightweight and fast across devices.' },
];

export default function FeatureCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % FEATURES.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-14 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why PetroPulse</h2>
          <div className="hidden sm:flex gap-2" role="tablist" aria-label="Feature tabs">
            {FEATURES.map((_, i) => (
              <button
                key={i}
                className={`h-2 w-6 rounded-full transition ${i === index ? 'bg-blue-600 w-8' : 'bg-slate-300'}`}
                aria-selected={i === index}
                aria-controls={`panel-${i}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div id={`panel-${i}`} key={f.title} className="min-w-full grid sm:grid-cols-2 gap-8 p-8">
                  <div className="flex items-center justify-center">
                    <Icon className="h-20 w-20 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="self-center">
                    <h3 className="text-xl font-semibold text-slate-900">{f.title}</h3>
                    <p className="mt-2 text-slate-600">{f.desc}</p>
                    <div className="mt-6">
                      <button
                        onClick={() => setIndex((i) => (i + 1) % FEATURES.length)}
                        className="relative inline-flex items-center gap-2 px-5 py-3 rounded bg-slate-900 text-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 overflow-hidden"
                      >
                        <span className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile dots */}
        <div className="mt-4 flex sm:hidden justify-center gap-2" role="tablist" aria-label="Feature tabs mobile">
          {FEATURES.map((_, i) => (
            <button
              key={i}
              className={`h-2 w-6 rounded-full transition ${i === index ? 'bg-blue-600 w-8' : 'bg-slate-300'}`}
              aria-selected={i === index}
              aria-controls={`panel-${i}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
