interface CommodityFaqProps {
  faqs: { question: string; answer: string }[]
}

export function CommodityFaq({ faqs }: CommodityFaqProps) {
  return (
    <div className="card-dark p-8">
      <h3 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-6">
        Frequently Asked Questions
      </h3>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h4 className="font-display text-lg text-text-primary mb-2">{faq.question}</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
