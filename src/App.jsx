import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './Hero'
import { Home, Profil, VisiMisi, Struktur, Anggota, Agenda, Berita, Kegiatan, Kontak } from './pages.jsx'
import AgendaPreview from './sections/AgendaPreview'
import NewsPreview from './sections/NewsPreview'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50/50 text-gray-800">
      <Navbar />
      <main>{children}</main>
      <footer className="mt-16 border-t bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Sekretariat DPRK Kota Langsa</p>
          <nav className="flex gap-4 text-sm">
            <a href="/kontak" className="hover:text-blue-700">Kontak</a>
            <a href="/berita" className="hover:text-blue-700">Berita</a>
            <a href="/agenda" className="hover:text-blue-700">Agenda</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
            <AgendaPreview />
            <NewsPreview />
          </Layout>
        }
      />
      <Route path="/profil" element={<Layout><Profil /></Layout>} />
      <Route path="/visi-misi" element={<Layout><VisiMisi /></Layout>} />
      <Route path="/struktur" element={<Layout><Struktur /></Layout>} />
      <Route path="/anggota" element={<Layout><Anggota /></Layout>} />
      <Route path="/agenda" element={<Layout><Agenda /></Layout>} />
      <Route path="/berita" element={<Layout><Berita /></Layout>} />
      <Route path="/kegiatan" element={<Layout><Kegiatan /></Layout>} />
      <Route path="/kontak" element={<Layout><Kontak /></Layout>} />
      <Route path="*" element={<Layout><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"><h1 className="text-2xl font-semibold">Halaman tidak ditemukan</h1></div></Layout>} />
    </Routes>
  )
}

export default App
