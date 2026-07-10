/**
 * TermsAndConditions - Reusable Terms & Conditions page component
 * Pass config with sections, title, and updated date
 */
'use client';

const Section = ({ title, content }) => (
  <section className="space-y-2">
    <h2 className="text-lg font-semibold">{title}</h2>
    <ul className="list-disc pl-6 space-y-1">
      {content.map((c, i) => (
        <li key={i} className="text-sm opacity-90">
          {c}
        </li>
      ))}
    </ul>
  </section>
);

const TermsAndConditions = ({ config, className = '', ...props }) => {
  if (!config) return null;

  const { title = 'Terms & Conditions', updated, sections = [] } = config;

  return (
    <main className={`py-10 ${className}`} {...props}>
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
          {updated && (
            <p className="text-sm opacity-80">Last updated: {updated}</p>
          )}
        </header>

        <div className="space-y-8">
          {sections.map((s, idx) => (
            <Section key={idx} title={s.title} content={s.content} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
