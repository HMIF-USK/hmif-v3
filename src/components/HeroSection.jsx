// src/components/HeroSection.jsx

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080311] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-32 bg-purple-600 blur-[120px] opacity-70"></div>

      {/* Border */}
      <div className="absolute inset-4 border border-cyan-500/50 rounded-lg"></div>

      {/* Badge */}
      <div className="absolute top-8 left-8">
        <span className="px-4 py-1 text-xs rounded-full bg-purple-500/20 text-gray-300 border border-purple-500/30">
          Kamtol
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tight">
          <span className="bg-gradient-to-b from-white via-gray-200 to-purple-300 bg-clip-text text-transparent">
            Informatics
          </span>
        </h1>

        <h2 className="text-5xl md:text-7xl font-extrabold uppercase bg-gradient-to-b from-white via-gray-200 to-purple-300 bg-clip-text text-transparent">
          Club
        </h2>

        <button className="mt-20 px-8 py-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-gray-200 font-semibold backdrop-blur-sm hover:bg-purple-500/30 transition">
          ✦ OUR FOUNDATION
        </button>
      </div>

      {/* Dekorasi kiri bawah */}
      <div className="absolute bottom-6 left-6 w-20 h-20 rounded-full bg-white/10 blur-sm rotate-12"></div>

      {/* Headset (opsional) */}
      <img
        src="/headset.png"
        alt="Headset"
        className="absolute top-1/2 left-1/2 w-32 -translate-x-[220px] -translate-y-1/2 opacity-80"
      />

      <img
        src="/headset.png"
        alt="Headset"
        className="absolute top-1/2 left-1/2 w-24 translate-x-[150px] -translate-y-1/4 opacity-80"
      />
    </section>
  );
}