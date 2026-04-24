import type { ReactNode } from 'react';
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  Twitter,
  Youtube,
  type LucideIcon,
} from 'lucide-react';

const displayFont = { fontFamily: "'Instrument Serif', serif" } as const;

const officialLinks = {
  home: 'https://www.oyu-intelligence.com/en',
  projects: 'https://www.oyu-intelligence.com/en/projects',
  blog: 'https://www.oyu-intelligence.com/blog',
  automation: 'https://www.oyu-intelligence.com/services/ai-automation',
};

const impactSteps = [
  'Backed by Oyu Intelligence LLC experience across 100+ shipped projects and 20+ global clients.',
  'Built for businesses that demand results, with automation engagements reporting average operations cost savings of up to 60%.',
  'Positioned inside a live SaaS ecosystem that includes Oyu AI, Astro AI, and LookLuxe AI.',
  'Designed for enterprise intelligence with scalable architecture, measurable outcomes, and production-ready deployment.',
];

const socialIcons: Array<{ label: string; Icon: LucideIcon }> = [
  { label: 'Facebook', Icon: Facebook },
  { label: 'Twitter', Icon: Twitter },
  { label: 'Instagram', Icon: Instagram },
  { label: 'Youtube', Icon: Youtube },
  { label: 'LinkedIn', Icon: Linkedin },
  { label: 'Music', Icon: Music2 },
];

type ButtonProps = {
  href?: string;
  label: string;
};

type StepProps = {
  children: ReactNode;
  number: number;
};

function Step({ children, number }: StepProps) {
  return (
    <div className="mb-6 flex items-start gap-5 last:mb-0">
      <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-[#DCFF00] text-xs font-bold text-[#0A0A0A]">
        {number}
      </div>
      <p className="text-[17px] leading-[1.55] text-[#E8E8E8]">{children}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex justify-center py-8">
      <div className="h-px w-24 bg-white/20" />
    </div>
  );
}

function PrimaryButton({ href = '#enroll', label }: ButtonProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      className="inline-flex items-center gap-3 rounded-lg bg-[#DCFF00] px-6 py-3 font-bold text-[#0A0A0A] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c9ea00]"
      href={href}
      rel={isExternal ? 'noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      <span>{label}</span>
      <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
    </a>
  );
}

function SolidButton({ href = '#enroll', label }: ButtonProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-[#0A0A0A] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8E8E8]"
      href={href}
      rel={isExternal ? 'noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {label}
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#050505] px-4 py-10 font-sans" id="top">
      <div className="mx-auto max-w-[640px] overflow-hidden shadow-2xl ring-1 ring-white/5">
        <div className="bg-[#111111] text-[#F2F2F2]">
          <section className="relative w-full overflow-hidden" style={{ aspectRatio: '640 / 820' }}>
            <video
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
              loop
              muted
              playsInline
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_064822_f120e48a-d545-45dd-a02d-facb07829888.mp4"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(17,17,17,0) 45%, rgba(17,17,17,0.45) 68%, rgba(17,17,17,0.9) 88%, rgba(17,17,17,1) 100%)',
              }}
            />

            <div className="relative z-10 flex h-full flex-col items-center px-6 pb-10 pt-12 text-center">
              <div className="text-white">
                <p className="text-[28px] leading-[0.95] tracking-tight" style={displayFont}>
                  Oyu AI
                </p>
                <p className="mt-1 text-[11px] font-medium tracking-[0.2em] sm:text-[13px]">
                  OYU INTELLIGENCE LLC
                </p>
              </div>

              <p className="mt-28 text-[13px] font-semibold tracking-[0.28em] text-white sm:mt-40">
                SYSTEMS ONLINE
              </p>

              <div className="flex-1" />

              <h1
                className="max-w-[560px] text-[44px] leading-[1.02] tracking-tight text-white sm:text-[58px]"
                style={displayFont}
              >
                Architecting
                <br />
                real intelligence
              </h1>

              <a
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D8F90A] px-8 py-4 font-semibold text-[#1E1E1E] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c9ea00]"
                href="#overview"
              >
                <span>Explore Oyu AI</span>
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </a>
            </div>
          </section>

          <section className="px-6 pb-8 pt-4 text-center sm:px-[78px]" id="overview">
            <p className="text-[18px] leading-[1.55] text-[#F2F2F2]">
              Built by Oyu Intelligence LLC, Oyu AI is an advanced AI ecosystem for real-time data
              analysis and autonomous decision-making in large-scale enterprises. It is part of an
              intelligence suite focused on AI automation, enterprise SaaS, and multi-agent systems
              for businesses that demand results.
            </p>
          </section>

          <div className="flex justify-center pb-14">
            <PrimaryButton href="#impact" label="View Platform" />
          </div>

          <Divider />

          <section className="px-6 pb-8 text-center sm:px-9" id="impact">
            <h2 className="text-[40px] leading-[1.05] tracking-tight sm:text-[46px]" style={displayFont}>
              Impact at scale
            </h2>
          </section>

          <section className="px-5 pb-10 sm:px-[42px]">
            <a className="group block overflow-hidden rounded-[14px]" href="#capabilities">
              <video
                autoPlay
                className="h-[260px] w-full rounded-[14px] object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[370px]"
                loop
                muted
                playsInline
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
              />
            </a>
          </section>

          <section className="px-6 pb-10 sm:px-[76px]">
            <div className="mx-auto max-w-[489px]">
              {impactSteps.map((step, index) => (
                <Step key={step} number={index + 1}>
                  {step}
                </Step>
              ))}
            </div>
          </section>

          <div className="flex justify-center pb-14">
            <SolidButton href="#capabilities" label="Explore Solutions" />
          </div>

          <Divider />

          <section className="px-6 pb-7 text-center sm:px-9" id="capabilities">
            <h2 className="text-[40px] leading-[1.05] tracking-tight sm:text-[46px]" style={displayFont}>
              Infrastructure-grade
              <br />
              AI systems
            </h2>
          </section>

          <section className="px-5 pb-10 sm:px-[42px]">
            <a className="group block overflow-hidden rounded-[14px]" href="#build">
              <video
                autoPlay
                className="h-[260px] w-full rounded-[14px] object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[370px]"
                loop
                muted
                playsInline
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4"
              />
            </a>
          </section>

          <section className="px-6 pb-8 text-center sm:px-[78px]">
            <p className="text-[18px] leading-[1.55] text-[#F2F2F2]">
              Oyu Intelligence LLC combines AI automation, data intelligence, and multi-agent
              architecture to solve complex business problems. With Private RAG security, enterprise
              data stays inside secure infrastructure while specialized agents collaborate, learn, and
              deliver production-ready workflows.
            </p>
          </section>

          <div className="flex justify-center pb-14">
            <SolidButton href={officialLinks.projects} label="View Projects" />
          </div>

          <section className="px-6 pb-12 sm:px-14" id="build">
            <div className="rounded-[10px] bg-[#D8F90A] px-6 py-12 text-center sm:px-8">
              <h2
                className="mb-3 text-[44px] leading-[1.02] tracking-tight text-[#1E1E1E] sm:text-[52px]"
                style={displayFont}
              >
                Ready to build
                <br />
                with Oyu AI?
              </h2>

              <p className="mb-8 px-4 text-[18px] leading-[1.5] text-[#1E1E1E]">
                Partner with Oyu Intelligence LLC to architect automation, enterprise SaaS, and
                multi-agent systems that deliver measurable results.
              </p>

              <PrimaryButton href={officialLinks.home} label="Initialize Project" />
            </div>
          </section>

          <footer className="border-t border-white/5 bg-[#080808] px-6 pt-12 text-center text-white sm:px-10">
            <div className="flex justify-center pb-8">
              <a
                className="text-[30px] font-bold tracking-tight text-white transition-colors hover:text-[#DCFF00]"
                href={officialLinks.home}
                rel="noreferrer"
                target="_blank"
              >
                OYU INTELLIGENCE
              </a>
            </div>

            <p className="pb-8 text-[12px] leading-[1.5] text-[#83837D]">
              Oyu AI is part of the Oyu Intelligence LLC Intelligence Suite alongside Astro AI and
              <br className="hidden sm:block" />
              LookLuxe AI.
            </p>

            <div className="flex justify-center pb-8">
              <div className="h-px w-24 bg-white/20" />
            </div>

            <div className="flex justify-center gap-5 pb-5">
              {socialIcons.map(({ Icon, label }) => (
                <a
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white hover:bg-white hover:text-[#1E1E1E]"
                  href={officialLinks.home}
                  key={label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>

            <p className="pb-4 text-[10px] leading-[1.6] text-[#83837D]">
              Explore the official Oyu Intelligence website for services, selected projects,
              <br className="hidden sm:block" />
              process details, and the latest AI insights.
            </p>

            <div className="space-x-2 pb-3 text-[12px]">
              <a className="hover:underline" href={officialLinks.home} rel="noreferrer" target="_blank">
                Home
              </a>
              <span className="text-[#8F8E88]">|</span>
              <a className="hover:underline" href={officialLinks.automation} rel="noreferrer" target="_blank">
                AI Automation
              </a>
              <span className="text-[#8F8E88]">|</span>
              <a className="hover:underline" href={officialLinks.projects} rel="noreferrer" target="_blank">
                Projects
              </a>
              <span className="text-[#8F8E88]">|</span>
              <a className="hover:underline" href={officialLinks.blog} rel="noreferrer" target="_blank">
                Blog
              </a>
            </div>

            <a
              className="inline-block text-[12px] text-white/80 hover:text-white"
              href={officialLinks.home}
              rel="noreferrer"
              target="_blank"
            >
              © 2026 OYU INTELLIGENCE LLC / SYSTEMS OPERATIONAL
            </a>

            <div className="pb-10" />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
