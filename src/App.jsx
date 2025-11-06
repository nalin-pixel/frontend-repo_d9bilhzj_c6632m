import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCarousel from './components/FeatureCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureCarousel />
        {/* CTA section */}
        <section className="py-16" id="nearby">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Find stations around you</h2>
                <p className="mt-3 text-slate-600">
                  Enable location to see nearby pumps with distance, live prices, and peak hour predictions.
                </p>
                <div className="mt-6 flex gap-3">
                  <a
                    href="#"
                    className="relative inline-flex items-center justify-center px-6 py-3 rounded bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition pointer-events-none" />
                    Use my location
                  </a>
                  <a href="#dashboard" className="px-6 py-3 rounded border border-slate-300 text-sm font-semibold hover:bg-slate-50">
                    View dashboard
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-inner flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-sm text-slate-600">Interactive map and cards will appear here in the full app.</p>
                    <p className="text-xs text-slate-500 mt-1">Geolocation fallback ensures graceful experience if denied.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard teaser */}
        <section id="dashboard" className="py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Smart insights</h2>
            <p className="mt-3 text-slate-600">Track price trends, busiest hours, and sales with interactive charts.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Avg. Petrol Price</p>
                <p className="mt-2 text-3xl font-bold">₹106.4</p>
                <p className="text-xs text-emerald-600 mt-1">+0.8% this week</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Busiest Hour</p>
                <p className="mt-2 text-3xl font-bold">6–7 PM</p>
                <p className="text-xs text-slate-500 mt-1">Weekdays</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Avg. Wait Time</p>
                <p className="mt-2 text-3xl font-bold">4.2 min</p>
                <p className="text-xs text-emerald-600 mt-1">-12% from last week</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
