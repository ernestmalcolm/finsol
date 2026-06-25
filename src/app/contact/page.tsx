'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, ShieldCheck, MessageCircle } from 'lucide-react'
import { SITE, ADD_VERIFICATION } from '@/lib/constants'
import { PageHero } from '@/components/shared/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const schema = z.object({
  name:        z.string().min(2, 'Name is required'),
  company:     z.string().min(2, 'Company is required'),
  email:       z.string().email('Valid email is required'),
  phone:       z.string().optional(),
  country:     z.string().min(2, 'Country is required'),
  enquiryType: z.string().min(1, 'Please select an enquiry type'),
  message:     z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

const ENQUIRY_TYPES = [
  'Strategic Advisory',
  'Financial Structuring',
  'Commodity Brokerage',
  'Due Diligence',
  'General Enquiry',
  'Partnership',
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setStatus('sending')
    try {
      // Web3Forms requires client-side submission on the free plan.
      // The access key is public by design; spam is handled in the dashboard.
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject:    `New Enquiry — ${data.enquiryType} from ${data.company}`,
          from_name:  `${data.name} (Finsol Website)`,
          replyto:    data.email,
          Name:       data.name,
          Company:    data.company,
          Email:      data.email,
          Phone:      data.phone || 'Not provided',
          Country:    data.country,
          'Enquiry Type': data.enquiryType,
          Message:    data.message,
        }),
      })
      const result = await res.json()
      if (!res.ok || !result.success) throw new Error()
      setStatus('sent')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-surface-light border border-border text-text-primary placeholder-text-muted px-4 py-3 rounded-md text-sm outline-none focus:border-gold transition-colors duration-300'
  const errorClass = 'text-red-400 text-xs mt-1'

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Partner With Finsol T Ltd"
        subtitle="Whether you are an investor, commodity buyer, or project developer — we want to hear from you. All new engagements begin with preliminary KYC and validation through Africa Due Diligence."
      />

      <section className="py-section bg-surface-base">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <ScrollReveal direction="left" className="lg:col-span-2 space-y-8">
              <div>
                <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-5">
                  Contact Details
                </p>
                <div className="space-y-4">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-start gap-3 text-text-secondary hover:text-text-primary transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{SITE.email}</span>
                  </a>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-3 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{SITE.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp.replace(/\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">WhatsApp: {SITE.whatsapp}</span>
                  </a>
                  <div className="flex items-start gap-3 text-text-secondary">
                    <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{SITE.address}</span>
                  </div>
                </div>
              </div>

              <div className="card-dark p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                    Preliminary Onboarding
                  </p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {ADD_VERIFICATION.preliminaryStage}
                </p>
                <a
                  href={ADD_VERIFICATION.platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs font-mono tracking-wide hover:underline"
                >
                  Africa Due Diligence platform →
                </a>
              </div>

              <div className="card-dark p-6">
                <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-3">
                  Business Hours
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Monday – Friday: 08:00 – 18:00 EAT<br />
                  Saturday: 09:00 – 13:00 EAT
                </p>
                <p className="text-text-muted text-xs mt-3">
                  East Africa Time (UTC+3)
                </p>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-3">
              <div className="card-dark p-8">
                {status === 'sent' ? (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mx-auto mb-4">
                      <Send className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-display text-2xl font-medium text-text-primary mb-2">
                      Message Sent
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Thank you for reaching out. Our team will respond within 1–2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <input {...register('name')} placeholder="Full Name *" className={inputClass} />
                        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                      </div>
                      <div>
                        <input {...register('company')} placeholder="Company / Organisation *" className={inputClass} />
                        {errors.company && <p className={errorClass}>{errors.company.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <input {...register('email')} type="email" placeholder="Email Address *" className={inputClass} />
                        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                      </div>
                      <div>
                        <input {...register('phone')} type="tel" placeholder="Phone Number" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <input {...register('country')} placeholder="Country *" className={inputClass} />
                        {errors.country && <p className={errorClass}>{errors.country.message}</p>}
                      </div>
                      <div>
                        <select {...register('enquiryType')} className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
                          <option value="" disabled>Enquiry Type *</option>
                          {ENQUIRY_TYPES.map((t) => (
                            <option key={t} value={t} className="bg-surface-card">{t}</option>
                          ))}
                        </select>
                        {errors.enquiryType && <p className={errorClass}>{errors.enquiryType.message}</p>}
                      </div>
                    </div>

                    <div>
                      <textarea
                        {...register('message')}
                        placeholder="Your message — please describe your enquiry in detail *"
                        rows={5}
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold text-surface-base font-medium font-body rounded-md hover:bg-gold-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
