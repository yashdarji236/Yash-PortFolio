export default function Testimonials() {
  const testimonials = [
    {
      quote: "Yash turned a fuzzy AI idea into a shippable product in 6 weeks. Impeccable taste, zero drama, and code I actually enjoy reading.",
      name: "Aarav Mehta",
      role: "CTO, Orbital Analytics — Bangalore",
    },
    {
      quote: "We rebuilt our entire checkout with him. Conversion up 32%, Lighthouse 97. The motion work alone was worth the engagement.",
      name: "Sophie Laurent",
      role: "Head of Product, Forge — Paris",
    },
    {
      quote: "Rare combo: deep backend chops and an actual eye for UI. Our design system finally feels like a product, not a chore.",
      name: "Kenji Tanaka",
      role: "VP Engineering, Atlas — Tokyo",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">KIND WORDS</h2>
        <p className="testimonials-subtitle">
          Founders and product leads I've shipped with recently.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <article key={t.name} className="testimonial-card hoverable">
            <span className="testimonial-quote-mark">❝</span>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-role">{t.role}</div>
          </article>
        ))}
      </div>
    </section>
  );
}