export default function AgendaPreview() {
  return (
    <section id="agenda" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Agenda Terdekat</h2>
            <p className="text-gray-600">Jadwal kegiatan resmi DPRK</p>
          </div>
          <a href="/agenda" className="text-blue-700 hover:underline font-semibold">Lihat semua</a>
        </div>
        <ul className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="p-6 rounded-lg border bg-white/70 flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">{10 + i}/01/2025</p>
                <p className="font-semibold">Rapat Paripurna {i + 1}</p>
                <p className="text-sm text-gray-600">Pembahasan rancangan kebijakan strategis daerah.</p>
              </div>
              <span className="inline-flex items-center rounded bg-red-600/10 text-red-700 px-3 py-1 text-xs font-semibold">Terbuka</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
