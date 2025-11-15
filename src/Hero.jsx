export default function Hero() {
  return (
    <section className="relative">
      <div
        className="h-[60vh] md:h-[70vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/60 via-blue-700/40 to-white/0" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <p className="uppercase tracking-wide text-sm text-white/80">Layanan Publik</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Sekretariat DPRK Kota Langsa</h1>
            <p className="mt-4 text-white/90">Portal informasi resmi yang clean, simple, dan informatif. Temukan agenda, berita, dan informasi layanan publik dengan cepat.</p>
            <div className="mt-6 flex gap-3">
              <a href="#agenda" className="bg-white text-red-700 px-4 py-2 rounded font-semibold hover:bg-red-50">Lihat Agenda</a>
              <a href="#berita" className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700">Berita Terbaru</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
