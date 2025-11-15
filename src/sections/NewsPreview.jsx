export default function NewsPreview() {
  return (
    <section id="berita" className="py-12 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Berita Terbaru</h2>
            <p className="text-gray-600">Update informasi seputar DPRK Kota Langsa</p>
          </div>
          <a href="/berita" className="text-blue-700 hover:underline font-semibold">Lihat semua</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="rounded-lg overflow-hidden border bg-white/70">
              <div className="h-40 bg-gradient-to-br from-red-600 to-blue-700" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Judul Berita {i + 1}</h3>
                <p className="text-sm text-gray-600">Ringkasan singkat berita mengenai kegiatan DPRK.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
