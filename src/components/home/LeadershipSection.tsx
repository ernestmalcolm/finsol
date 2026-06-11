'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

type TeamMember = {
  name: string
  role: string
  photo: string | null
  bio: string
}

const TEAM: TeamMember[] = [
  {
    name: 'Reinfrida Mmbando',
    role: 'Managing Partner',
    photo: '/images/team/reinfrida-mmbando.jpg',
    bio: 'Driven by Purpose. Defined by Results. A seasoned leader with over 30 years of experience, including 10 years of specialised expertise in international trade finance, business consultancy, and commodity brokerage — alongside three decades in the construction industry. As a Strategic Architect, Reinfrida brings a proven track record in structuring complex cross-border trade instruments (DLC/SBLC), mitigating risk for both exporters and investors. Her professional career has been defined by one goal: transforming raw potential into bankable, scalable international trade. She operates with the precision that the Brazilian market demands — ensuring that Tanzanian commodities don\'t just reach the Port of Santos, but arrive meeting the highest global standards. With 30 years of hands-on construction industry experience shaping her discipline and attention to detail, Reinfrida consistently delivers complex projects on time and to the highest quality. Her strong understanding of international markets, regulations, and trade flows makes her a results-focused leader committed to delivering value, reducing risk, and unlocking opportunities for sustainable growth.',
  },
  {
    name: 'Grayson Emmanuel Mmbando',
    role: 'Managing Director',
    photo: null,
    bio: 'Grayson Emmanuel Mmbando is a Co-Founder of FinSol and a results-driven Trade & Investment Strategist specialising in cross-border trade facilitation, financial modelling, and risk management across sub-Saharan Africa. With a sharp analytical focus, Grayson bridges the gap between raw commercial concepts and bankable, investor-ready business plans that attract both local banking partnerships and international financing. At FinSol, Grayson oversees the firm\'s commodity traders portfolio, driving value through strategic financial packaging and rigorous due diligence frameworks. Driven by a deep passion for the agricultural commodity business and regional logistics, he architects end-to-end import/export frameworks and structures precise FOB/CIF pricing models to ensure African products seamlessly enter global corridors. His expertise ensures that agribusiness, mineral, and infrastructure projects fully comply with strict European, Middle Eastern, and global market standards. Grayson\'s background includes a powerful track record in risk mitigation; during his tenure as a Trade Analyst at Stochastics Africa, he successfully implemented rigorous corporate verification protocols that delivered an 86% reduction in downside financial exposure. Armed with an academic background from the Tanzania Institute of Bankers, Grayson is dedicated to unlocking high-yield export opportunities and protecting partner and client assets from transactional friction.',
  },
  {
    name: 'Philip Banda',
    role: 'Partner & Business Development',
    photo: '/images/team/philip-banda.jpg',
    bio: 'An accomplished Senior Executive and Financial Engineering Specialist with over 25 years of experience driving digital transformation and investment facilitation across Southern and East Africa. Currently serving as Managing Partner at Finsol Financial Management in Tanzania and Regional Business Development Executive for Africa Due Diligence (ADD), he specialises in connecting international funders with verified projects across 13 African countries. His leadership background includes roles as Innovations Director at the Royal Bank of Africa (DRC) and Director at Sunetrix Engineering in Zimbabwe. Holding an M.Sc. in Computer Science and international certifications in cybersecurity and cloud architecture, Philip is dedicated to transforming Africa\'s business ecosystem through strategic innovation, rigorous due diligence, and sustainable growth.',
  },
  {
    name: 'Nicole Raymond',
    role: 'Sales & Marketing',
    photo: '/images/team/nicole-raymond.jpg',
    bio: 'A results-driven marketing professional with experience in brand communication, stakeholder engagement, and strategic marketing across corporate and financial sectors. Passionate about building meaningful brand connections, driving visibility, and delivering impactful campaigns that support business growth. At Finsol, Nicole is responsible for strengthening brand presence, supporting marketing initiatives, and fostering strong client relationships through innovative, purpose-driven communication.',
  },
  {
    name: 'Ernest Mwinchumu',
    role: 'Tech Consultant',
    photo: '/images/team/ernest-mwinchumu-v2.jpg',
    bio: 'Ernest is a software engineer and product leader holding a BSc (Hons) in Computer Science from the University of Dar es Salaam. He specialises in frontend and mobile development — working across React, Next.js, TypeScript, and React Native — with a strong eye for UI/UX design and product strategy. He currently serves as Tech Lead at Simplitech, where he owns end-to-end delivery of mobile and web platforms used by tens of thousands of users, spanning product direction, interface design, and cross-functional execution. His career began at Tanzania\'s e-Government Authority, contributing to open-source initiatives and technical research, before joining Simplitech and growing into a leadership role. At FinSol, Ernest covers the full technology brief — from digital presence and product roadmap to vendor evaluation and internal tooling — bringing a product-minded, design-conscious approach to every decision.',
  },
  // {
  //   name: 'TBA',
  //   role: 'Compliance',
  //   photo: null,
  //   bio: '',
  // },
]

function Placeholder({ name }: { name: string }) {
  const initials = name === 'TBA' ? '?' : name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <div className="w-full h-full bg-surface-light flex items-center justify-center">
      <span className="font-display text-4xl font-light text-gold opacity-60">{initials}</span>
    </div>
  )
}

function BioModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-lg bg-surface-card border border-border-gold rounded-card p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-gold transition-colors text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-5 mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-border-gold shrink-0">
            {member.photo ? (
              <Image src={member.photo} alt={member.name} fill className="object-cover object-top" />
            ) : (
              <Placeholder name={member.name} />
            )}
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-1">
              {member.role}
            </p>
            <h3 className="font-display text-xl font-light text-text-primary">
              {member.name}
            </h3>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <p className="text-text-secondary text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  )
}

export function LeadershipSection() {
  const [active, setActive] = useState<TeamMember | null>(null)

  return (
    <section className="py-section bg-surface-card">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our Team"
          title="The Team Behind Finsol"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.07}>
              <div className="group">
                {/* Photo */}
                <div className="relative aspect-4/5 rounded-card overflow-hidden border border-border-gold mb-5">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Placeholder name={member.name} />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-gold to-transparent opacity-60" />
                </div>

                {/* Role & name */}
                <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-1">
                  {member.role}
                </p>
                <h3 className="font-display text-xl font-light text-text-primary">
                  {member.name}
                </h3>

                {/* View Profile button — only if bio exists */}
                {member.bio && (
                  <button
                    onClick={() => setActive(member)}
                    className="mt-3 font-mono text-xs tracking-[0.15em] text-gold uppercase border-b border-gold/40 hover:border-gold transition-colors"
                  >
                    View Profile
                  </button>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {active && <BioModal member={active} onClose={() => setActive(null)} />}
    </section>
  )
}
