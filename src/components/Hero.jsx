import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay - allow pointer events to pass to Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="text-white drop-shadow-lg">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Fuel up faster. Drive smarter.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-3 max-w-xl text-sm sm:text-lg text-white/90"
          >
            Find nearby petrol pumps, check live prices and peak hours, and get there quicker with smart navigation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row items-center gap-3"
          >
            <a
              href="#nearby"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition"
            >
              Find nearby pumps
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="flex items-center gap-1 text-white/90">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="ml-2 text-xs sm:text-sm">4.7 from 2k+ drivers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
