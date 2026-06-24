import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#08090d] text-white font-sans antialiased">
      <Head>
        <title>Privacy Policy — Smintos</title>
      </Head>
      <nav className="border-b border-white/[0.06] px-5 sm:px-8 h-16 flex items-center">
        <Link href="/" className="text-base font-bold tracking-widest text-white hover:text-green-400 transition-colors">
          SMINTOS
        </Link>
      </nav>
      <main className="max-w-2xl mx-auto px-5 sm:px-8 py-16">
        <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-8">Last updated: coming soon</p>
        <p className="text-slate-400 leading-relaxed">
          Privacy Policy for Smintos is coming soon. Please check back shortly or reach out directly if you have questions.
        </p>
      </main>
    </div>
  )
}
