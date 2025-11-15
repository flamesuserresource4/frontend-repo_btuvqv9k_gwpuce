import Hero from './sections/Hero'
import NewsPreview from './sections/NewsPreview'
import AgendaPreview from './sections/AgendaPreview'

export function Home() {
  return (
    <>
      <Hero />
      <AgendaPreview />
      <NewsPreview />
    </>
  )
}

export function Profil() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Profil Sekretariat DPRK Kota Langsa</h1>
      <div className="prose max-w-none">
        <h2>Sejarah</h2>
        <p>
          Sekretariat DPRK Kota Langsa berperan sebagai unsur pelayanan administrasi dan operasional
          bagi pimpinan dan anggota DPRK. Berlandaskan prinsip transparansi dan akuntabilitas,
          sekretariat mendukung terwujudnya tata kelola pemerintahan yang baik.
        </p>
        <h2>Visi</h2>
        <p>
          Terwujudnya pelayanan sekretariat DPRK yang profesional, transparan, dan responsif demi
          mendukung aspirasi masyarakat Kota Langsa.
        </p>
        <h2>Misi</h2>
        <ul>
          <li>Meningkatkan kualitas pelayanan administrasi dan kesekretariatan.</li>
          <li>Mengembangkan sistem informasi yang terbuka dan mudah diakses publik.</li>
          <li>Mendorong partisipasi masyarakat melalui layanan informasi yang cepat dan akurat.</li>
        </ul>
        <h2>Tujuan</h2>
        <ul>
          <li>Memberikan dukungan operasional yang efektif kepada DPRK.</li>
          <li>Meningkatkan efisiensi pengelolaan keuangan dan aset.</li>
          <li>Mewujudkan layanan publik yang prima.</li>
        </ul>
      </div>
    </section>
  )
}

export function VisiMisi() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Visi & Misi</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-6 rounded-lg border bg-white/70">
          <h2 className="text-xl font-semibold text-red-700 mb-2">Visi</h2>
          <p>Pelayanan sekretariat DPRK yang profesional, transparan, dan responsif.</p>
        </div>
        <div className="p-6 rounded-lg border bg-white/70">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Misi</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Peningkatan kualitas layanan administrasi.</li>
            <li>Penguatan sistem informasi publik.</li>
            <li>Kolaborasi dan partisipasi masyarakat.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Struktur() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Struktur Organisasi</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {['Ketua', 'Wakil Ketua', 'Sekretaris'].map((role) => (
          <div key={role} className="p-6 rounded-lg border bg-white/70">
            <p className="text-sm text-gray-500">Jabatan</p>
            <p className="text-lg font-semibold">{role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Anggota() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Anggota DPRK</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="p-6 rounded-lg border bg-white/70">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-red-600 to-blue-700 mb-4" />
            <p className="font-semibold">Nama Anggota {i + 1}</p>
            <p className="text-sm text-gray-500">Fraksi/Komisi</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Agenda() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Agenda</h1>
      <ul className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="p-6 rounded-lg border bg-white/70 flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">Tanggal {i + 10}/01/2025</p>
              <p className="font-semibold">Kegiatan {i + 1}</p>
              <p className="text-sm text-gray-600">Deskripsi singkat kegiatan {i + 1}.</p>
            </div>
            <span className="inline-flex items-center rounded bg-red-600/10 text-red-700 px-3 py-1 text-xs font-semibold">Terbuka</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Berita() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Berita</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <article key={i} className="rounded-lg overflow-hidden border bg-white/70">
            <div className="h-40 bg-gradient-to-br from-red-600 to-blue-700" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Judul Berita {i + 1}</h3>
              <p className="text-sm text-gray-600">Ringkasan singkat berita mengenai kegiatan DPRK.</p>
              <button className="mt-3 text-blue-700 hover:underline">Baca selengkapnya</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Kegiatan() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Kegiatan & Galeri Foto</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-video rounded-lg overflow-hidden border">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop)` }} />
          </div>
        ))}
      </div>
    </section>
  )
}

export function Kontak() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Kontak</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <form className="space-y-4 p-6 rounded-lg border bg-white/70">
          <input className="w-full border rounded px-3 py-2" placeholder="Nama" />
          <input className="w-full border rounded px-3 py-2" placeholder="Email" />
          <textarea className="w-full border rounded px-3 py-2" rows="4" placeholder="Pesan" />
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Kirim</button>
        </form>
        <div className="rounded-lg overflow-hidden border">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Kota%20Langsa&output=embed"
            className="w-full h-80"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
