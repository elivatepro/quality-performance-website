import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Dealer Portal | Our Technology",
  description:
    "Quality Performance's dealer portal gives dealerships real-time visibility into every PPF installation, every invoice, and every dollar, from install to final billing.",
};

export default function Technology() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
            alt="Technology and data visualization"
            fill
            className="object-cover opacity-25"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-32 lg:px-12">
          <div className="max-w-3xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-blue">
              Dealer Portal
            </p>
            <h1
              className="animate-hero mt-4 type-display text-[40px] text-white md:text-[52px] lg:text-[60px]"
              style={{ animationDelay: "0.1s" }}
            >
              Your Installations. Your Data. One Dashboard.
            </h1>
            <p
              className="animate-hero mt-6 text-lg text-white/70 md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              Most PPF providers leave dealerships in the dark. We built a dedicated portal that gives you real-time visibility into every installation, every invoice, and every dollar.
            </p>
            <div
              className="animate-hero mt-8 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "0.5s" }}
            >
              <Link
                href="/contact?type=demo"
                className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-blue px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-hover hover:scale-[1.02]"
              >
                Request a Demo
              </Link>
              <a
                href="https://app.qualityperformance.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.15] px-6 py-3.5 text-base font-medium text-white/80 transition-all hover:border-white/[0.3] hover:text-white"
              >
                Open Dealer Portal
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                  The Problem We Solved
                </p>
                <h2
                  className="mt-3 type-display text-[30px] text-white md:text-[38px]"
                >
                  No Phone Calls. No Spreadsheets. No Guesswork.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
                  <p>
                    Dealerships working with PPF providers typically deal with installation records that live in someone else&apos;s notebook, billing discrepancies that take days to resolve, and zero visibility into what&apos;s happening on the ground.
                  </p>
                  <p>
                    When you can&apos;t see the work, you can&apos;t manage the relationship. You&apos;re trusting blindly. And when discrepancies surface (a missing purchase order, an unexpected line item, an install that was never logged) the back-and-forth eats into your time and your bottom line.
                  </p>
                  <p className="font-medium text-white/80">
                    We built the portal to eliminate that friction entirely.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "100%", label: "Installs digitally tracked" },
                  { metric: "< 24h", label: "Scheduling turnaround" },
                  { metric: "0", label: "Paper invoices" },
                  { metric: "Real-time", label: "Status visibility for dealers" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-surface-alt p-6 text-center"
                  >
                    <div className="text-2xl font-bold text-blue md:text-3xl">
                      {item.metric}
                    </div>
                    <div className="mt-2 text-xs font-medium text-text-secondary">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Admin Dashboard Preview */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Admin Dashboard"
              title="Complete Operational Visibility"
              description="A single screen shows today's installs, month-to-date volume, payroll, duplicates, and invoice readiness, so you start every day knowing exactly where things stand."
            />
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="mx-auto mt-4 max-w-5xl overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-alt p-3 shadow-elevated">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-3 py-2">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-white/40">app.qualityperformance.io</span>
              </div>

              <div className="rounded-xl bg-dark">
                {/* Portal layout */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="hidden w-[200px] shrink-0 border-r border-white/[0.06] bg-[#0a1628] p-4 md:block">
                    <div className="flex items-center gap-2.5 pb-5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                        <Image src="/images/qp-logo.png" alt="QP" width={20} height={20} />
                      </div>
                      <span className="text-xs font-bold text-white">Quality Performance</span>
                    </div>
                    <div className="space-y-0.5">
                      {["Onboarding", "Owner Dashboard", "Admin Dashboard", "Installer Dashboard", "Supervisor Dashboard", "Leaderboard", "Operations", "Reports", "Settings"].map((item, i) => (
                        <div
                          key={item}
                          className={`rounded-lg px-3 py-2 text-[11px] ${
                            i === 2
                              ? "bg-[#2563eb] font-semibold text-white"
                              : "text-white/50"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-5 md:p-6">
                    {/* Header */}
                    <div className="mb-5">
                      <div className="text-lg font-semibold text-white">Hello, Admin.</div>
                      <div className="mt-0.5 text-xs text-white/40">Welcome back to the Admin Dashboard</div>
                    </div>

                    {/* Search bar */}
                    <div className="mb-5 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5">
                      <svg className="h-4 w-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                      <span className="text-xs text-white/30">Search for VIN Number, Dealer Name or Installer</span>
                    </div>

                    {/* Install Snapshot */}
                    <div className="mb-5">
                      <div className="mb-3 text-sm font-semibold text-white/80">Install Snapshot</div>
                      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
                        {[
                          { label: "Install Today.", value: "35", color: "from-red-500 to-red-600" },
                          { label: "Installs MTD.", value: "70", color: "from-blue-500 to-blue-600" },
                          { label: "Units MTD.", value: "174", color: "from-emerald-500 to-emerald-600" },
                          { label: "Payroll MTD.", value: "$0.00", color: "from-pink-500 to-pink-600" },
                          { label: "Duplicates", value: "3", color: "from-orange-500 to-orange-600" },
                          { label: "Uninvoiced", value: "69", color: "from-amber-500 to-amber-600" },
                        ].map((stat) => (
                          <div key={stat.label} className={`rounded-xl bg-gradient-to-br ${stat.color} p-3 text-center`}>
                            <div className="text-[10px] font-medium text-white/80">{stat.label}</div>
                            <div className="mt-1 text-lg font-bold text-white md:text-xl">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Charts row */}
                    <div className="grid gap-3 md:grid-cols-2">
                      {/* Cars vs Units */}
                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <div className="mb-3 text-xs font-semibold text-white/60">Cars vs Units (This month)</div>
                        <div className="flex h-24 items-end gap-[3px]">
                          {[3,1,1,1,1,1,4,4,1,3,3,1,1,1,1,1,2,3,3,3].map((h, i) => (
                            <div key={i} className="flex flex-1 flex-col gap-[1px]">
                              <div className="rounded-sm bg-sky-400/60" style={{ height: `${h * 12}px` }} />
                              <div className="rounded-sm bg-emerald-400/60" style={{ height: `${Math.max(1, h - 1) * 8}px` }} />
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-sm bg-sky-400/60" />
                            <span className="text-[9px] text-white/40">Install ID</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-sm bg-emerald-400/60" />
                            <span className="text-[9px] text-white/40">Units</span>
                          </div>
                        </div>
                      </div>

                      {/* Dealer Mix */}
                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <div className="mb-3 text-xs font-semibold text-white/60">Dealer Mix (MTD)</div>
                        <div className="flex h-24 items-end gap-1.5">
                          {[1, 5, 7, 1, 18, 4, 3, 18, 7, 2, 1, 3].map((h, i) => (
                            <div key={i} className="flex-1 rounded-t-sm bg-red-400/60" style={{ height: `${(h / 18) * 100}%` }} />
                          ))}
                        </div>
                        <div className="mt-2 flex justify-between">
                          <span className="text-[8px] text-white/30">Crowley Auto</span>
                          <span className="text-[8px] text-white/30">Toyota</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature: Real-Time Install Tracking */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                  Real-Time Installation Tracking
                </p>
                <h2
                  className="mt-3 type-display text-[30px] text-white md:text-[38px]"
                >
                  Every Install. Logged Instantly.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
                  <p>
                    Every installation is logged the moment it&apos;s completed, not days later, not at the end of the month. Each record captures the full picture: VIN, stock number, make, model, year, the specific PPF products applied, and photographic documentation.
                  </p>
                  <p>
                    Your team can view installation history at any time, filter by date range or vehicle, and confirm exactly what was done without picking up the phone.
                  </p>
                </div>
                <div className="mt-6 rounded-xl border border-blue/15 bg-blue/[0.04] p-4">
                  <p className="text-sm font-medium text-white/80">
                    Complete accountability for every vehicle. No disputed installs, no missing records, just a clean log you can reference anytime.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Install Logs Mock */}
            <AnimatedSection delay={200}>
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-alt p-3 shadow-elevated">
                <div className="flex items-center gap-2 px-3 py-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[10px] text-white/30">All Install Logs</span>
                </div>
                <div className="rounded-xl bg-dark p-4">
                  {/* Table header */}
                  <div className="mb-2 grid grid-cols-[1fr_1fr_auto_auto] gap-3 border-b border-white/[0.06] pb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                    <span>VIN</span>
                    <span>Dealership</span>
                    <span>Installer</span>
                    <span>Status</span>
                  </div>
                  {/* Rows */}
                  {[
                    { vin: "JN8BT3DD9TW311818", dealer: "George Harte Nissan", installer: "Adolfo Yepez", status: "Approved" },
                    { vin: "JN8BT3DD6TW331596", dealer: "George Harte Nissan", installer: "Adolfo Yepez", status: "Approved" },
                    { vin: "1FT8W3BN6TEC39832", dealer: "Saybrook Ford", installer: "John J Gomes", status: "Approved" },
                    { vin: "1N4BL4DW2TN325591", dealer: "George Harte Nissan", installer: "Adolfo Yepez", status: "Approved" },
                    { vin: "7FARS6H89TE108626", dealer: "Ocean Honda Groton", installer: "John J Gomes", status: "Approved" },
                    { vin: "2HKRS4H42TH482722", dealer: "Ocean Honda Groton", installer: "John J Gomes", status: "Approved" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-[1fr_1fr_auto_auto] items-center gap-3 border-b border-white/[0.04] py-2.5">
                      <span className="truncate font-mono text-[11px] font-medium text-emerald-400">{row.vin}</span>
                      <span className="truncate text-[11px] text-white/60">{row.dealer}</span>
                      <span className="text-[11px] text-white/50">{row.installer}</span>
                      <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">{row.status}</span>
                    </div>
                  ))}
                  <div className="mt-3 text-[10px] text-white/30">Showing 1000 of ###</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Feature: Automated Notifications */}
      <section className="relative overflow-hidden bg-surface-alt py-20 md:py-28">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80" alt="" fill className="object-cover opacity-[0.06] blur-md" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Automated Notifications"
              title="Tailored to Your Team"
              description="The portal actively keeps your team informed. Every person receives only the updates that matter to them."
            />
          </AnimatedSection>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Purchase Order Reminders",
                description: "If an installation is missing a PO number, the portal flags it and sends a reminder to the right person. No more end-of-month scrambles to reconcile incomplete records.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                ),
              },
              {
                title: "Daily Installation Summaries",
                description: "Every morning, designated contacts receive a recap of the previous day's installations: VINs, stock numbers, dates, and unit counts, all in a clean email summary.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
              },
              {
                title: "Invoice Delivery",
                description: "When an invoice is generated, it's sent directly to the contacts you've designated for billing. No intermediaries, no delays. Your accounting team gets what they need, when they need it.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 100}>
                <div className="h-full rounded-xl bg-dark-alt p-7 transition-all hover:shadow-card">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-subtle text-blue">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-white/[0.06] bg-dark-alt p-5 text-center">
              <p className="text-sm text-text-secondary">
                Each notification type can be toggled on or off per contact. Your service manager gets daily summaries. Your accounting team gets invoices only. <span className="font-medium text-white/80">You decide who sees what.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature: Billing & Financial Transparency */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Billing Logs Mock */}
            <AnimatedSection>
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-alt p-3 shadow-elevated">
                <div className="flex items-center gap-2 px-3 py-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[10px] text-white/30">Billing Logs</span>
                </div>
                <div className="rounded-xl bg-dark p-4">
                  {[
                    {
                      install: "QPI-260403-036",
                      type: "Standard",
                      billing: "Per Unit",
                      charge: "$165.00",
                      units: ["Door Edges", "Door Cups", "Nav Screen"],
                      dealer: "George Harte Nissan - West Haven",
                      status: "Approved",
                    },
                    {
                      install: "QPI-260403-035",
                      type: "Standard",
                      billing: "Per Unit",
                      charge: "$165.00",
                      units: ["Door Edges", "Door Cups", "Nav Screen"],
                      dealer: "George Harte Nissan - West Haven",
                      status: "Approved",
                    },
                  ].map((log, i) => (
                    <div key={i} className={`${i > 0 ? "mt-4 border-t border-white/[0.06] pt-4" : ""}`}>
                      <div className="space-y-2">
                        {[
                          ["Install", log.install],
                          ["Install Type", log.type],
                          ["Billing Type", log.billing],
                          ["Install Charge", log.charge],
                          ["Units Installed", log.units.join(", ")],
                          ["Dealership", log.dealer],
                          ["Status", log.status],
                        ].map(([label, value]) => (
                          <div key={label} className="flex items-start justify-between gap-4 py-1">
                            <span className="shrink-0 text-[11px] font-medium text-white/40">{label}</span>
                            <span className={`text-right text-[11px] ${label === "Install" ? "font-mono text-white/80" : label === "Install Charge" ? "font-semibold text-blue" : "text-white/60"}`}>
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="mt-3 text-[10px] text-white/30">Showing 50 of 50</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                  Billing & Financial Transparency
                </p>
                <h2
                  className="mt-3 type-display text-[30px] text-white md:text-[38px]"
                >
                  Every Dollar Ties Back to a Documented Install.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
                  <p>
                    Every invoice is backed by installation records in your portal. Cross-reference any line item against the actual install log, the vehicle, the products applied, the date, the installer. There&apos;s no black box.
                  </p>
                  <p>
                    Pricing is configured on a per-dealership basis, so your rates are locked in and visible. Invoices are generated from approved records only, every installation goes through our internal review process before it hits your books.
                  </p>
                  <p>
                    Payment terms, outstanding balances, and invoice history are all accessible from the portal, giving your finance team a single source of truth.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Before / After Comparison */}
      <section className="relative overflow-hidden bg-surface-alt py-20 md:py-28">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80" alt="" fill className="object-cover opacity-[0.04] blur-lg" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="The Difference"
              title="Why Dealerships Choose the Portal"
            />
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="mx-auto mt-4 grid max-w-4xl gap-6 md:grid-cols-2">
              {/* Before */}
              <div className="rounded-2xl border border-white/[0.06] bg-dark-alt p-7">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                  <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Before Quality Performance</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Installations tracked on paper or not at all",
                    "Billing reconciliation takes hours",
                    "PO follow-ups happen by phone",
                    "No visibility into what's happening on the ground",
                    "Your team is reactive, always catching up",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-white/50">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="rounded-2xl border border-blue/20 bg-blue/[0.04] p-7">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10">
                  <svg className="h-5 w-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">After Quality Performance</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Every install logged in real time with photo documentation",
                    "Notifications go to the right people automatically",
                    "Invoices are transparent and verifiable",
                    "Complete visibility from install to billing",
                    "Your team is proactive, your PPF program runs itself",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative overflow-hidden bg-dark py-20 md:py-28">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80" alt="" fill className="object-cover opacity-[0.08] blur-md" />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Getting Started"
              title="Three Steps to Full Visibility"
              description="Getting started on the portal is fast. Your team can be up and running the same day you partner with us."
            />
          </AnimatedSection>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "We Set Up Your Profile",
                description: "We configure your pricing, products, and notification preferences based on your needs. No software to install, the portal runs in your browser.",
              },
              {
                step: "02",
                title: "Your Team Gets Invited",
                description: "Each point of contact receives access with permissions tailored to their role. Floor managers see what they need. Billing contacts see what they need.",
              },
              {
                step: "03",
                title: "Installations Begin",
                description: "Every install is logged, every notification is sent, and every invoice is generated automatically. The portal handles the details so your team can focus on selling cars.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 100}>
                <div className="relative rounded-xl border border-white/[0.08] bg-white/[0.03] p-7">
                  <span className="text-4xl font-extrabold text-blue/20">{item.step}</span>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="relative overflow-hidden bg-surface-alt py-20 md:py-28">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&q=80" alt="" fill className="object-cover opacity-[0.05] blur-lg" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Platform Capabilities"
              title="Built for PPF Operations at Scale"
              description="Every feature exists because we needed it to deliver consistent quality across multiple states and dozens of dealership partners."
            />
          </AnimatedSection>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real-Time Install Tracking",
                description: "Every install tracked from scheduling through completion. Dealerships see live status updates without a single phone call.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                ),
              },
              {
                title: "Automated Billing & Invoicing",
                description: "Invoices generated automatically from approved installs. PO integration ensures reconciliation without manual data entry.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
              },
              {
                title: "Quality Assurance Workflow",
                description: "Every completed install goes through admin review. Photos, notes, and quality checks logged, ensuring consistency across the entire network.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                title: "Installer Management",
                description: "Multi-state installer network coordinated centrally. Assignments, schedules, and workload balancing, dealerships just submit the request.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
              },
              {
                title: "Performance Leaderboard",
                description: "Track installer performance metrics, completion rates, and quality scores. The leaderboard drives accountability and helps identify top talent.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.853m0 0H12m4.5 0a6.023 6.023 0 00-2.77-.853" />
                  </svg>
                ),
              },
              {
                title: "Reporting & Insights",
                description: "Comprehensive reporting on install volumes, revenue, turnaround times, and trends, data that drives better business decisions.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 80}>
                <div className="h-full rounded-xl bg-dark-alt p-7 transition-all hover:shadow-card">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-subtle text-blue">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue">
              See It in Action
            </p>
            <h2
              className="mt-3 type-display text-[26px] text-white md:text-[32px]"
            >
              The best way to understand the portal is to see it.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-text-secondary">
              We&apos;ll walk your team through a live demo tailored to your dealership&apos;s size, volume, and workflow. No commitment. No pressure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact?type=demo"
                className="inline-flex items-center gap-2 rounded-[6px] bg-blue px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-hover hover:scale-[1.02]"
              >
                Request a Demo
              </Link>
              <a
                href="https://app.qualityperformance.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-blue hover:underline"
              >
                Visit Dealer Portal
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <p className="mt-6 text-sm text-white/40">
              Have a quick question? Reach us at{" "}
              <a href="mailto:support@qualityinstallsco.com" className="text-blue hover:underline">
                support@qualityinstallsco.com
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
