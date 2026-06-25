import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const MINT = '#00D97E'

/* ─── Icons ─── */
function IconCalendar() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  )
}
function IconDocument() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}
function IconCreditCard() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  )
}
function IconUsers() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  )
}
function IconCamera() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  )
}
function IconCheck() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}
function IconMenu() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}
function IconClose() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
function IconArrow() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
  )
}

/* ─── Data ─── */
const features = [
  { icon: <IconCalendar />, title: 'Job Scheduling & Dispatching', description: 'Assign jobs, set times, and keep your crew moving with a clear daily view of everything on the board.' },
  { icon: <IconDocument />, title: 'Estimates & Invoicing', description: 'Create and send professional estimates and invoices in seconds — from the job site or the office.' },
  { icon: <IconCreditCard />, title: 'Payment Collection', description: 'Accept payments on the spot. Get paid faster without the back-and-forth or awkward follow-ups.' },
  { icon: <IconUsers />, title: 'Customer Management', description: 'Keep every customer, job history, and note in one place — always at your fingertips when you need it.' },
  { icon: <IconCamera />, title: 'Job Notes & Photo Uploads', description: 'Document every job with notes and photos. Cover yourself, look professional, and close disputes fast.' },
  { icon: <IconPhone />, title: 'Mobile First Design', description: 'Built for the field. Works on your phone, tablet, or desktop without missing a beat.' },
]

const problems = [
  { title: 'Admin is eating your evenings', description: "You're quoting jobs, chasing invoices, and texting updates when you should be off the clock." },
  { title: 'Jobs fall through the cracks', description: "Without a system, you're on memory and text threads. Something always gets missed — and it costs you." },
  { title: 'Everything else is too complicated', description: "You don't need a $300/month enterprise platform. You need something that works on day one." },
]

const coreFeatures = ['Job scheduling & dispatching', 'Estimates & invoicing', 'Payment collection', 'Customer management', 'Job notes & photo uploads', 'Mobile friendly', 'Basic reporting']
const proFeatures = ['Everything in Core', 'Two-way contact sync with GHL', 'Estimates push to GHL opportunities', 'Job status triggers GHL automations', 'Pipeline & conversation sync']

const tickerItems = ['Job Scheduling', 'Estimates & Invoicing', 'Payment Collection', 'Customer Management', 'Photo Uploads', 'Mobile First', 'GoHighLevel Sync', 'Job Dispatching', 'Basic Reporting', 'Field-Ready']

const steps = [
  { number: '01', title: 'Sign up and set up in minutes', description: "No sales call. No 40-page onboarding doc. Add your business details and you're ready to go." },
  { number: '02', title: 'Add your jobs, customers, and team', description: 'Import existing customers or start fresh. Create jobs, assign crew, get everyone on the same page.' },
  { number: '03', title: 'Run from anywhere. Connect to GHL when ready.', description: 'Smintos works on its own from day one. Plug into GoHighLevel whenever you want to level up.' },
]

/* ─── Hero Visual ─── */
function HeroVisual() {
  const metrics = [
    { label: 'Jobs scheduled this week', value: '14', sub: '3 pending · 11 confirmed', dark: false },
    { label: 'Revenue collected', value: '$6,840', sub: 'This month', dark: true },
    { label: 'Estimates awaiting approval', value: '5', sub: 'Avg. response: 4 hrs', dark: false },
  ]

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0 select-none pointer-events-none space-y-3">
      {metrics.map((m, i) => (
        <div
          key={i}
          className={`rounded-2xl border p-6 shadow-[0_8px_40px_rgba(0,0,0,0.07)] ${
            i === 1 ? 'ml-8 animate-float-delay' : 'animate-float'
          } ${m.dark ? 'bg-[#0d0d0d] border-white/[0.07]' : 'bg-white border-black/[0.07]'}`}
        >
          <p className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${m.dark ? 'text-white/35' : 'text-black/35'}`}>
            {m.label}
          </p>
          <div className="flex items-end justify-between gap-4">
            <p className={`text-3xl font-bold leading-none ${m.dark ? 'text-white' : 'text-[#0d0d0d]'}`}
               style={i === 1 ? { color: MINT } : {}}>
              {m.value}
            </p>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                 style={{ background: `${MINT}${m.dark ? 'ff' : '22'}` }}>
              <svg className="w-4 h-4" style={{ color: m.dark ? '#000' : MINT }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
          </div>
          <p className={`text-xs mt-2 ${m.dark ? 'text-white/35' : 'text-black/35'}`}>{m.sub}</p>
        </div>
      ))}
      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-15 blur-3xl" style={{ background: MINT }} />
    </div>
  )
}

/* ─── Page ─── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#0d0d0d] font-sans antialiased">
      <Head>
        <title>Smintos — Field Service Software for Home Service Operators</title>
        <meta name="description" content="Simple field service software for home service operators. Schedule jobs, send estimates, collect payments, and manage customers from one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ── Announcement bar ── */}
      <div className="text-black text-xs font-semibold text-center py-2.5 px-4 tracking-wide" style={{ background: MINT }}>
        Now in Early Access — 7-day free trial, no credit card required.
      </div>

      {/* ── Nav ── */}
      <nav className="sticky top-0 z-50 border-b border-black/[0.07] bg-[#f7f5f0]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-3 items-center h-16">
            <Link href="/" className="text-base font-bold tracking-[0.2em] text-[#0d0d0d] uppercase">Smintos</Link>
            <div className="hidden md:flex items-center justify-center gap-8">
              {['#features|Features', '#pricing|Pricing', '#how-it-works|How It Works'].map(item => {
                const [href, label] = item.split('|')
                return <a key={href} href={href} className="text-sm font-medium text-[#0d0d0d]/50 hover:text-[#0d0d0d] transition-colors duration-150">{label}</a>
              })}
            </div>
            <div className="flex items-center justify-end gap-3">
              <a href="#pricing" className="hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-black transition-opacity hover:opacity-80 duration-150" style={{ background: MINT }}>
                Start Free Trial
              </a>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 -mr-2 text-[#0d0d0d]/50 hover:text-[#0d0d0d]">
                {menuOpen ? <IconClose /> : <IconMenu />}
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-black/[0.07] bg-[#f7f5f0] px-5 py-4 space-y-1">
            <a href="#features" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#0d0d0d]/60 hover:text-[#0d0d0d] hover:bg-black/[0.04]">Features</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#0d0d0d]/60 hover:text-[#0d0d0d] hover:bg-black/[0.04]">Pricing</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#0d0d0d]/60 hover:text-[#0d0d0d] hover:bg-black/[0.04]">How It Works</a>
            <div className="pt-2">
              <a href="#pricing" onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-black text-center" style={{ background: MINT }}>Start Free Trial</a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="px-5 sm:px-8 pt-14 pb-10 lg:pt-16 lg:pb-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.09] bg-white px-4 py-1.5 text-xs font-semibold text-[#0d0d0d]/60 mb-8">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: MINT }} />
                Built for operators, not project managers
              </div>

              <h1 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#0d0d0d] mb-6">
                Made simple<br />
                so you can{' '}
                <span style={{ color: MINT }}>make&nbsp;more&nbsp;money.</span>
              </h1>

              <p className="text-lg text-[#0d0d0d]/55 max-w-lg mb-8 leading-relaxed">
                Schedule jobs, send estimates, collect payments — all from your phone. No complicated setup. No bloated software. Just the tools you need to run your field ops and get paid.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-bold text-black transition-opacity hover:opacity-80 duration-150" style={{ background: MINT }}>
                  Start Free Trial <IconArrow />
                </a>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-black/15 hover:border-black/30 hover:bg-black/[0.04] transition-all duration-150 px-7 py-3.5 text-base font-semibold text-[#0d0d0d]">
                  See Pricing
                </a>
              </div>

              {/* Trust row */}
              <div className="flex items-center gap-6 text-sm text-[#0d0d0d]/40">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" style={{ color: MINT }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  7 days free
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" style={{ color: MINT }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" style={{ color: MINT }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Cancel anytime
                </span>
              </div>
            </div>

            {/* Right — metrics visual */}
            <div className="hidden lg:block">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="border-y border-black/[0.07] bg-white py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 text-sm font-semibold text-[#0d0d0d]/50">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: MINT }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="border-b border-black/[0.07] bg-[#f7f5f0]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-black/[0.07]">
          {[
            { value: '$57', label: 'Starting at per month' },
            { value: '1 file', label: 'No complex setup needed' },
            { value: '< 5 min', label: 'To your first job in the system' },
          ].map((stat, i) => (
            <div key={i} className="sm:px-10 first:pl-0 last:pr-0">
              <p className="text-4xl font-bold text-[#0d0d0d] mb-1" style={i === 0 ? { color: MINT } : {}}>{stat.value}</p>
              <p className="text-sm text-[#0d0d0d]/45">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Problems ── */}
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: MINT }}>Sound Familiar?</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0d0d0d] leading-tight mb-6">
                The pain is real.<br />We built<br />around it.
              </h2>
              <p className="text-[#0d0d0d]/50 leading-relaxed">
                Every feature in Smintos exists because a real operator — just like you — told us exactly what was breaking in their day.
              </p>
            </div>
            <div className="space-y-4">
              {problems.map((problem, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-black/[0.07] p-5 hover:border-black/[0.15] transition-all duration-200 hover:shadow-sm">
                  <div className="flex items-start gap-5">
                    <span className="text-4xl font-bold text-black/08 font-mono leading-none flex-shrink-0 pt-1">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">{problem.title}</h3>
                      <p className="text-sm text-[#0d0d0d]/50 leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-16 px-5 sm:px-8 bg-[#f7f5f0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: MINT }}>Features</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0d0d0d] leading-tight">
                Everything you need.<br />Nothing you don&apos;t.
              </h2>
            </div>
            <a href="#pricing" className="self-start sm:self-auto inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-black flex-shrink-0" style={{ background: MINT }}>
              Start Free Trial <IconArrow />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* 1 — Job Scheduling, bullet list */}
            <div className="bg-white rounded-3xl p-6 border border-black/[0.06] flex flex-col gap-5">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${MINT}20`, color: MINT }}>
                  <IconCalendar />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0d0d0d] mb-3">Job Scheduling & Dispatching</h3>
                <p className="text-sm text-[#0d0d0d]/50 leading-relaxed">Assign jobs, set times, and keep your crew moving without the morning group text.</p>
              </div>
              <ul className="space-y-3">
                {['Schedule and assign jobs in seconds', 'Clear daily crew view — no guessing', 'Dispatch updates in one tap'].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#0d0d0d]/60">
                    <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: `${MINT}25`, color: MINT }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2 — Estimates, mini invoice mockup */}
            <div className="bg-white rounded-3xl p-6 border border-black/[0.06] flex flex-col gap-5">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${MINT}20`, color: MINT }}>
                  <IconDocument />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0d0d0d] mb-3">Estimates & Invoicing</h3>
                <p className="text-sm text-[#0d0d0d]/50 leading-relaxed">Send professional estimates and invoices in seconds — from the job site or the couch.</p>
              </div>
              <div className="rounded-2xl border border-black/[0.07] bg-[#f7f5f0] p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-black/30 uppercase">Estimate #1042</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${MINT}25`, color: '#00a85f' }}>Pending</span>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between text-[#0d0d0d]/55"><span>Labor & materials</span><span>$620</span></div>
                  <div className="flex justify-between text-[#0d0d0d]/55"><span>Equipment fee</span><span>$80</span></div>
                  <div className="h-px bg-black/[0.07]" />
                  <div className="flex justify-between font-bold text-[#0d0d0d]"><span>Total</span><span>$700</span></div>
                </div>
                <div className="rounded-xl py-2.5 text-center text-xs font-bold text-black" style={{ background: MINT }}>Send Estimate →</div>
              </div>
            </div>

            {/* 3 — Payment Collection, light stat tiles */}
            <div className="bg-white rounded-3xl p-6 border border-black/[0.06] flex flex-col gap-5">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${MINT}20`, color: MINT }}>
                  <IconCreditCard />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0d0d0d] mb-3">Payment Collection</h3>
                <p className="text-sm text-[#0d0d0d]/50 leading-relaxed">Accept payments on the spot. Get paid before you pull out of the driveway.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#f7f5f0] border border-black/[0.06] p-4">
                  <p className="text-[10px] font-bold tracking-widest text-[#0d0d0d]/30 uppercase mb-2">Today</p>
                  <p className="text-2xl font-bold" style={{ color: MINT }}>$1,840</p>
                  <p className="text-xs text-[#0d0d0d]/35 mt-1">3 payments</p>
                </div>
                <div className="rounded-2xl bg-[#f7f5f0] border border-black/[0.06] p-4">
                  <p className="text-[10px] font-bold tracking-widest text-[#0d0d0d]/30 uppercase mb-2">This month</p>
                  <p className="text-2xl font-bold text-[#0d0d0d]">$9,420</p>
                  <p className="text-xs mt-1" style={{ color: MINT }}>↑ 18%</p>
                </div>
              </div>
            </div>

            {/* 4 — Customer Management, bullet list */}
            <div className="bg-white rounded-3xl p-6 border border-black/[0.06] flex flex-col gap-5">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${MINT}20`, color: MINT }}>
                  <IconUsers />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0d0d0d] mb-3">Customer Management</h3>
                <p className="text-sm text-[#0d0d0d]/50 leading-relaxed">Every customer, job history, and note in one place — always at your fingertips.</p>
              </div>
              <ul className="space-y-3">
                {['Full job history per customer', 'Notes & photos attached to every record', 'Never lose a contact again'].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#0d0d0d]/60">
                    <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: `${MINT}25`, color: MINT }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* 5 — Job Notes & Photos, photo grid */}
            <div className="bg-white rounded-3xl p-6 border border-black/[0.06] flex flex-col gap-5">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${MINT}20`, color: MINT }}>
                  <IconCamera />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0d0d0d] mb-3">Job Notes & Photo Uploads</h3>
                <p className="text-sm text-[#0d0d0d]/50 leading-relaxed">Document every job. Cover yourself, look professional, and close disputes before they start.</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-[#f7f5f0] border border-black/[0.06] flex items-center justify-center">
                    <svg className="w-5 h-5 text-black/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* 6 — Mobile First, platform tags */}
            <div className="bg-white rounded-3xl p-6 border border-black/[0.06] flex flex-col gap-5">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${MINT}20`, color: MINT }}>
                  <IconPhone />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0d0d0d] mb-3">Mobile First Design</h3>
                <p className="text-sm text-[#0d0d0d]/50 leading-relaxed">Built for the field. Works on your phone, tablet, or desktop — because your office is wherever the job is.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Works on iOS', 'Works on Android', 'Works on Desktop', 'No app download required', 'Offline-friendly'].map((tag, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-black/[0.08] text-[#0d0d0d]/55">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-16 px-5 sm:px-8 bg-[#f7f5f0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: MINT }}>Pricing</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0d0d0d] leading-tight">
              Simple, flat pricing.
            </h2>
            <p className="text-[#0d0d0d]/45 mt-3">No contracts. No setup fees. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Core */}
            <div className="rounded-2xl border border-black/[0.09] bg-white p-6">
              <h3 className="text-xs font-bold text-[#0d0d0d]/35 uppercase tracking-widest mb-5">Core</h3>
              <div className="flex items-end gap-1.5 mb-2">
                <span className="text-6xl font-bold text-[#0d0d0d] tracking-tight leading-none">$57</span>
                <span className="text-[#0d0d0d]/35 text-sm mb-2">/mo</span>
              </div>
              <p className="text-sm text-[#0d0d0d]/45 mb-5">Everything to run your field ops. No GHL required.</p>
              <a href="#" className="block w-full rounded-xl border-2 border-black/10 hover:border-black/25 hover:bg-black/[0.03] transition-all duration-150 px-5 py-3.5 text-sm font-bold text-[#0d0d0d] text-center mb-5">
                Start Free Trial
              </a>
              <ul className="space-y-3">
                {coreFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#0d0d0d]/60">
                    <span style={{ color: MINT }}><IconCheck /></span>{f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div className="relative rounded-2xl border-2 bg-white p-6 shadow-[0_0_60px_rgba(0,217,126,0.1)]" style={{ borderColor: MINT }}>
              <div className="absolute -top-4 left-6">
                <span className="inline-block rounded-full text-black text-[11px] font-bold px-4 py-1.5 tracking-wide shadow-sm" style={{ background: MINT }}>
                  Most Popular
                </span>
              </div>
              <h3 className="text-xs font-bold text-[#0d0d0d]/35 uppercase tracking-widest mb-5">Pro</h3>
              <div className="flex items-end gap-1.5 mb-2">
                <span className="text-6xl font-bold text-[#0d0d0d] tracking-tight leading-none">$87</span>
                <span className="text-[#0d0d0d]/35 text-sm mb-2">/mo</span>
              </div>
              <p className="text-sm text-[#0d0d0d]/45 mb-5">Core plus full GoHighLevel sync for operators ready to scale.</p>
              <a href="#" className="block w-full rounded-xl px-5 py-3.5 text-sm font-bold text-black text-center mb-5 transition-opacity hover:opacity-80" style={{ background: MINT }}>
                Start Free Trial
              </a>
              <ul className="space-y-3">
                {proFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#0d0d0d]/60">
                    <span style={{ color: MINT }}><IconCheck /></span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: MINT }}>How It Works</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0d0d0d] leading-tight mb-6">
                Up and running<br />in minutes.
              </h2>
              <p className="text-[#0d0d0d]/50 leading-relaxed mb-8">
                No implementation calls. No training sessions. If you&apos;ve ever used a phone, you can use Smintos.
              </p>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-black transition-opacity hover:opacity-80" style={{ background: MINT }}>
                Start Free Trial <IconArrow />
              </a>
            </div>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 rounded-2xl border border-black/[0.07] bg-[#f7f5f0] hover:bg-[#f0ede7] transition-colors duration-200 p-5">
                  <span className="text-5xl font-bold text-black/[0.07] font-mono leading-none flex-shrink-0 pt-1">{step.number}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#0d0d0d]/50 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Block ── */}
      <section className="px-5 sm:px-8 py-6 bg-[#f7f5f0]">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl px-8 py-12 text-center" style={{ background: MINT }}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-4">Get Started Today</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-black leading-tight mb-4">
              Run a tighter operation.<br />Starting now.
            </h2>
            <p className="text-black/55 mb-10 max-w-md mx-auto">
              7-day free trial. No credit card. No sales call. Just sign up and go.
            </p>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-[#0d0d0d] hover:bg-black px-8 py-4 text-base font-bold text-white transition-colors duration-150">
              Start Free Trial <IconArrow />
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-5 sm:px-8 bg-[#f7f5f0] border-t border-black/[0.07]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-bold tracking-[0.2em] text-[#0d0d0d] uppercase">Smintos</span>
          <p className="text-xs text-[#0d0d0d]/30">&copy; {new Date().getFullYear()} Smintos. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="text-xs text-[#0d0d0d]/35 hover:text-[#0d0d0d]/70 transition-colors">Terms</Link>
            <Link href="/privacy" className="text-xs text-[#0d0d0d]/35 hover:text-[#0d0d0d]/70 transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
