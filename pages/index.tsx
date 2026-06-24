import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

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

/* ─── Data ─── */
const features = [
  {
    icon: <IconCalendar />,
    title: 'Job Scheduling & Dispatching',
    description: 'Assign jobs, set times, and keep your crew moving with a clear daily view of everything on the board.',
  },
  {
    icon: <IconDocument />,
    title: 'Estimates & Invoicing',
    description: 'Create and send professional estimates and invoices in seconds — from the job site or the office.',
  },
  {
    icon: <IconCreditCard />,
    title: 'Payment Collection',
    description: 'Accept payments on the spot. Get paid faster without the back-and-forth or awkward follow-ups.',
  },
  {
    icon: <IconUsers />,
    title: 'Customer Management',
    description: 'Keep every customer, job history, and note in one place — always at your fingertips when you need it.',
  },
  {
    icon: <IconCamera />,
    title: 'Job Notes & Photo Uploads',
    description: 'Document every job with notes and photos. Cover yourself, look professional, and close disputes fast.',
  },
  {
    icon: <IconPhone />,
    title: 'Mobile First Design',
    description: 'Built for the field. Works on your phone, tablet, or desktop without missing a beat.',
  },
]

const problems = [
  {
    title: 'Admin work is eating your evenings',
    description:
      "You're quoting jobs, chasing invoices, and texting status updates when you should be off the clock. The paperwork never stops.",
  },
  {
    title: 'Jobs and customers fall through the cracks',
    description:
      "Without a system, you're running on memory, sticky notes, and text threads. Something always gets missed — and it costs you.",
  },
  {
    title: 'Your current software is too complex or too expensive',
    description:
      "You don't need a $300/month enterprise platform with a 40-hour onboarding. You need something that works on day one.",
  },
]

const coreFeatures = [
  'Job scheduling & dispatching',
  'Estimates & invoicing',
  'Payment collection',
  'Customer management',
  'Job notes & photo uploads',
  'Mobile friendly',
  'Basic reporting',
]

const proFeatures = [
  'Everything in Core',
  'Two-way contact sync with GHL',
  'Estimates push to GHL opportunities',
  'Job status triggers GHL automations',
  'Pipeline & conversation sync',
]

const steps = [
  {
    number: '01',
    title: 'Sign up and set up your account in minutes',
    description:
      "No long onboarding. No call with a sales rep. Create your account, add your business details, and you're ready to run.",
  },
  {
    number: '02',
    title: 'Add your jobs, customers, and team',
    description:
      'Import existing customers or add them one by one. Create jobs, assign crew members, and get everyone aligned from day one.',
  },
  {
    number: '03',
    title: 'Run your field ops from anywhere — connect to GHL when ready',
    description:
      'Use Smintos as your standalone field tool. When you want to level up, plug into GoHighLevel and connect your ops to your marketing and sales system.',
  },
]

/* ─── Page ─── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#08090d] text-white font-sans antialiased">
      <Head>
        <title>Smintos — Field Service Software for Home Service Operators</title>
        <meta
          name="description"
          content="Simple field service software for window tinters, epoxy contractors, pressure washers, remodelers, and more. Schedule jobs, send estimates, collect payments, and manage customers from one place. Works standalone or connects to GoHighLevel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#08090d]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-3 items-center h-16">
            {/* Wordmark */}
            <Link href="/" className="text-lg font-bold tracking-widest text-white">
              SMINTOS
            </Link>

            {/* Center nav links */}
            <div className="hidden md:flex items-center justify-center gap-8">
              <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors duration-150">
                Features
              </a>
              <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors duration-150">
                Pricing
              </a>
              <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors duration-150">
                How It Works
              </a>
            </div>

            {/* Right: CTA + mobile toggle */}
            <div className="flex items-center justify-end gap-3">
              <a
                href="#pricing"
                className="hidden md:inline-flex items-center rounded-lg bg-green-500 hover:bg-green-400 transition-colors duration-150 px-4 py-2 text-sm font-semibold text-black"
              >
                Start Free Trial
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 -mr-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <IconClose /> : <IconMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/[0.06] bg-[#08090d] px-5 py-4 space-y-1">
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              How It Works
            </a>
            <div className="pt-2">
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg bg-green-500 hover:bg-green-400 transition-colors px-4 py-3 text-sm font-semibold text-black text-center"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-28 px-5 sm:px-8 overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
          <div className="mt-10 w-[900px] h-[600px] rounded-full bg-green-500/[0.05] blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Early access badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/[0.08] px-4 py-1.5 text-xs font-medium text-green-400 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Now in Early Access — 7-Day Free Trial
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-bold tracking-tight leading-[1.1] mb-6 text-white">
            Stop Running Your Business{' '}
            <br className="hidden sm:block" />
            <span className="text-green-400">From a Text Thread.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Smintos is simple field service software for home service operators — window tinters, epoxy contractors, pressure washers, remodelers, and more. Schedule jobs, send estimates, collect payments, and manage customers from one place. Works standalone. Connects to GoHighLevel when you&apos;re ready.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#pricing"
              className="w-full sm:w-auto rounded-lg bg-green-500 hover:bg-green-400 transition-colors duration-150 px-7 py-3.5 text-sm font-semibold text-black"
            >
              Start Free Trial
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/[0.04] transition-all duration-150 px-7 py-3.5 text-sm font-semibold text-white"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="py-20 px-5 sm:px-8 bg-[#0c0e15]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-green-400 mb-3 tracking-[0.15em] uppercase">
              Sound Familiar?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The Pain Is Real. We Built Around It.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.07] bg-[#10121a] p-7"
              >
                <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center mb-5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{problem.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-green-400 mb-3 tracking-[0.15em] uppercase">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Everything You Need. Nothing You Don&apos;t.
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
              Built for how you actually work — not how a software company thinks you should.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group rounded-xl border border-white/[0.07] bg-[#10121a] p-6 hover:border-green-500/30 hover:bg-[#111520] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mb-5 group-hover:bg-green-500/[0.15] transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 px-5 sm:px-8 bg-[#0c0e15]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-green-400 mb-3 tracking-[0.15em] uppercase">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Simple, Flat Pricing. No Surprises.
            </h2>
            <p className="text-slate-400 mt-4">
              Start your 7-day free trial today. No credit card required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Core Plan */}
            <div className="rounded-xl border border-white/[0.07] bg-[#10121a] p-8">
              <div className="mb-7">
                <h3 className="text-xl font-bold text-white mb-1">Core</h3>
                <p className="text-sm text-slate-400 mb-5">
                  Everything to run your field ops. No GHL required.
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-bold text-white tracking-tight">$57</span>
                  <span className="text-slate-400 text-sm">/mo</span>
                </div>
              </div>

              <a
                href="#"
                className="block w-full rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/[0.04] transition-all duration-150 px-5 py-3 text-sm font-semibold text-white text-center mb-8"
              >
                Start Free Trial
              </a>

              <ul className="space-y-3.5">
                {coreFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-green-400">
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="relative rounded-xl border border-green-500/40 bg-[#10121a] p-8 shadow-[0_0_40px_rgba(34,197,94,0.06)]">
              {/* Most Popular badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="inline-block rounded-full bg-green-500 text-black text-[11px] font-bold px-4 py-1 tracking-wide">
                  Most Popular
                </span>
              </div>

              <div className="mb-7">
                <h3 className="text-xl font-bold text-white mb-1">Pro</h3>
                <p className="text-sm text-slate-400 mb-5">
                  Core plus full GoHighLevel sync. For operators ready to connect their field ops to their marketing and sales system.
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-bold text-white tracking-tight">$87</span>
                  <span className="text-slate-400 text-sm">/mo</span>
                </div>
              </div>

              <a
                href="#"
                className="block w-full rounded-lg bg-green-500 hover:bg-green-400 transition-colors duration-150 px-5 py-3 text-sm font-semibold text-black text-center mb-8"
              >
                Start Free Trial
              </a>

              <ul className="space-y-3.5">
                {proFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-green-400">
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-green-400 mb-3 tracking-[0.15em] uppercase">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Up and Running in Minutes. Not Days.
            </h2>
          </div>

          <div className="space-y-5">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-5 sm:gap-7 rounded-xl border border-white/[0.07] bg-[#10121a] p-6 sm:p-8"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 font-bold text-sm font-mono">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#pricing"
              className="inline-block rounded-lg bg-green-500 hover:bg-green-400 transition-colors duration-150 px-8 py-3.5 text-sm font-semibold text-black"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] bg-[#08090d] py-10 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-base font-bold tracking-widest text-white">SMINTOS</span>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Smintos. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-150">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-150">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
